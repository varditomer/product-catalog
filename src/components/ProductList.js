'use client';

import { useProductContext } from '@/store/ProductContext';
import ProductCard from './ProductCard';
import Loader from './Loader';

export default function ProductList() {
    const { products, loading, error } = useProductContext();

    if (loading) return <Loader />;    
    if (error) return <div className="error">{error}</div>;

    return (
        <section className="product-list">
            <div className="product-grid">
                {products.length === 0 ? (
                    <p>No products found.</p>
                ) : (
                    products.map(product => (
                        <ProductCard key={product._id} product={product} />
                    ))
                )}
            </div>
        </section>
    );
}
