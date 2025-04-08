// src/app/products/[id]/page.js
'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { productService } from '@/services/product.service';
import { useProductContext } from '@/store/ProductContext';
import ReviewForm from '@/components/ReviewForm';
import Loader from '@/components/Loader';

export default function ProductDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { products, updateProduct, addReview } = useProductContext();

    // Helper function to calculate average rating
    function calculateAverageRating(reviews) {
        if (!reviews || reviews.length === 0) return 'No ratings';

        const sum = reviews.reduce((total, review) => total + review.rating, 0);
        return (sum / reviews.length).toFixed(1);
    }

    useEffect(() => {
        async function loadProduct() {
            try {
                // Try to find product in store first
                const storeProduct = products.find(p => p._id === params.id);

                if (storeProduct) {
                    setProduct(storeProduct);
                    setLoading(false);
                } else {
                    // Fetch from API if not in store
                    const data = await productService.getById(params.id);
                    setProduct(data);
                    // Update store
                    updateProduct(data);
                    setLoading(false);
                }
            } catch (err) {
                console.error('Failed to fetch product details:', err);
                setError('Failed to load product details. Please try again later.');
                setLoading(false);
            }
        }

        if (params.id) {
            loadProduct();
        }
    }, [params.id, products, updateProduct]);

    const handleBackClick = () => {
        router.push('/');
    };

    const handleReviewAdded = (newReview) => {
        // Update local state
        setProduct({
            ...product,
            reviews: [...(product.reviews || []), newReview]
        });

        // Update store
        addReview(product._id, newReview);
    };

    if (loading) return (
        <div className="container">
            <Loader />
        </div>
    );

    if (error) return (
        <div className="container">
            <div className="error">{error}</div>
            <button onClick={handleBackClick} className="back-button">
                Back to Homepage
            </button>
        </div>
    );

    if (!product) return (
        <div className="container">
            <div className="not-found">Product not found</div>
            <button onClick={handleBackClick} className="back-button">
                Back to Homepage
            </button>
        </div>
    );

    return (
        <div className="container product-details-page">
            <button onClick={handleBackClick} className="back-button">
                &larr; Back to Products
            </button>

            <div className="product-details">
                <div className="product-image-container">
                    {product.detailImageUrl && (
                        <Image
                            src={product.detailImageUrl}
                            alt={product.name}
                            width={500}
                            height={400}
                            priority={true}
                        />
                    )}
                    {!product.detailImageUrl && product.imageUrl && (
                        <Image
                            src={product.imageUrl}
                            alt={product.name}
                            width={500}
                            height={400}
                            priority={true}
                        />
                    )}
                </div>

                <div className="product-info-container">
                    <h1 className="product-name">{product.name}</h1>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                    <p className="product-category">Category: {product.category}</p>
                    <div className="product-description">
                        <h2>Description</h2>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>

            <div className="reviews-section">
                <div className="reviews-header">
                    <h2>Customer Reviews</h2>
                    <div className="reviews-summary">
                        <span className="avg-rating">★ {calculateAverageRating(product.reviews)}</span>
                        <span className="review-count">({product.reviews ? product.reviews.length : 0} reviews)</span>
                    </div>
                </div>

                {product.reviews && product.reviews.length > 0 ? (
                    <div className="reviews-list">
                        {product.reviews.map((review, index) => (
                            <div key={index} className="review-item">
                                <div className="review-header">
                                    <span className="reviewer-name">{review.userName}</span>
                                    <span className="review-rating">★ {review.rating}</span>
                                </div>
                                <p className="review-comment">{review.comment}</p>
                                <p className="review-date">
                                    {new Date(review.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No reviews yet. Be the first to review this product!</p>
                )}

                <div className="add-review">
                    <h3>Add Your Review</h3>
                    <ReviewForm productId={product._id} onReviewAdded={handleReviewAdded} />
                </div>
            </div>
        </div>
    );
}
