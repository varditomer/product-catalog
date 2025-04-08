// src/services/review.service.js
import { httpService } from './http.service';

function addReview(review) {
    return httpService.post('reviews', review);
}

function getReviewsByProductId(productId) {
    return httpService.get(`reviews/${productId}`);
}

export const reviewService = {
    addReview,
    getReviewsByProductId
};
