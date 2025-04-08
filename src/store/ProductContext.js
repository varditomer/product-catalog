// src/store/ProductContext.js
'use client';

import { createContext, useContext, useReducer, useCallback } from 'react';
import { productService } from '@/services/product.service';

// Initial state
const initialState = {
    products: [],
    loading: true,
    error: null
};

// Action types
const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const ADD_REVIEW = 'ADD_REVIEW';

// Reducer
function productReducer(state, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_START:
            return { ...state, loading: true, error: null };
        case FETCH_PRODUCTS_SUCCESS:
            return { ...state, products: action.payload, loading: false };
        case FETCH_PRODUCTS_ERROR:
            return { ...state, error: action.payload, loading: false };
        case UPDATE_PRODUCT:
            const updatedProductIndex = state.products.findIndex(p => p._id === action.payload._id);
            if (updatedProductIndex !== -1) {
                const updatedProducts = [...state.products];
                updatedProducts[updatedProductIndex] = action.payload;
                return { ...state, products: updatedProducts };
            } else {
                return { ...state, products: [...state.products, action.payload] };
            }
        case ADD_REVIEW:
            const { productId, review } = action.payload;
            const productIndex = state.products.findIndex(p => p._id === productId);
            if (productIndex !== -1) {
                const product = state.products[productIndex];
                const updatedProduct = {
                    ...product,
                    reviews: [...(product.reviews || []), review]
                };
                const newProducts = [...state.products];
                newProducts[productIndex] = updatedProduct;
                return { ...state, products: newProducts };
            }
            return state;
        default:
            return state;
    }
}

// Create context
const ProductContext = createContext(null);

// Provider component
export function ProductProvider({ children }) {
    const [state, dispatch] = useReducer(productReducer, initialState);

    const fetchProducts = useCallback(async () => {
        // Skip if products are already loaded
        if (state.products.length > 0) return;

        dispatch({ type: FETCH_PRODUCTS_START });
        try {
            const products = await productService.query();
            dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
        } catch (error) {
            console.error('Failed to fetch products:', error);
            dispatch({
                type: FETCH_PRODUCTS_ERROR,
                payload: 'Failed to load products. Please try again later.'
            });
        }
    }, [state.products.length]);

    const updateProduct = useCallback((product) => {
        dispatch({ type: UPDATE_PRODUCT, payload: product });
    }, []);

    const addReview = useCallback((productId, review) => {
        dispatch({
            type: ADD_REVIEW,
            payload: { productId, review }
        });
    }, []);

    const value = {
        ...state,
        fetchProducts,
        updateProduct,
        addReview
    };

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
}

// Custom hook to use the context
export function useProductContext() {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProductContext must be used within a ProductProvider');
    }
    return context;
}
