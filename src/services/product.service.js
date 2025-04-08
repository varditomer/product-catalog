// src/services/product.service.js
import { httpService } from './http.service';

function query(filterBy = {}) {
    return httpService.get('products', filterBy);
}

function getById(productId) {
    return httpService.get(`products/${productId}`);
}

function save(product) {
    if (product._id) {
        return httpService.put(`products/${product._id}`, product);
    } else {
        return httpService.post('products', product);
    }
}

function remove(productId) {
    return httpService.delete(`products/${productId}`);
}

export const productService = {
    query,
    getById,
    save,
    remove
};
