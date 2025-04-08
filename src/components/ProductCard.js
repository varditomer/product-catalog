// src/components/ProductCard.js
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
    // Helper function to calculate average rating
    function calculateAverageRating(reviews) {
        if (!reviews || reviews.length === 0) return 'No ratings';

        const sum = reviews.reduce((total, review) => total + review.rating, 0);
        return (sum / reviews.length).toFixed(1);
    }

    return (
        <div className="product-card">
            {product.imageUrl && (
                <div className="product-image">
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={300}
                        height={200}
                        priority={true}
                    />
                </div>
            )}
            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <p className="product-category">{product.category}</p>

                {/* Review count and average rating */}
                <div className="product-rating">
                    <span>★ {calculateAverageRating(product.reviews)}</span>
                    <span>({product.reviews ? product.reviews.length : 0} reviews)</span>
                </div>

                <Link href={`/products/${product._id}`} className="view-details-btn">
                    View Details
                </Link>
            </div>
        </div>
    );
}
