// src/components/ReviewForm.js
'use client';

import { useState } from 'react';
import { reviewService } from '@/services/review.service';

export default function ReviewForm({ productId, onReviewAdded }) {
    const [formData, setFormData] = useState({
        userName: '',
        rating: 5,
        comment: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError('');
        setSuccess(false);

        try {
            if (!formData.userName.trim()) {
                throw new Error('Please enter your name');
            }

            if (!formData.comment.trim()) {
                throw new Error('Please enter a comment');
            }

            const reviewData = {
                ...formData,
                productId,
                createdAt: new Date()
            };

            const response = await reviewService.addReview(reviewData);

            setSuccess(true);
            setFormData({
                userName: '',
                rating: 5,
                comment: ''
            });

            // Notify parent component of the new review
            if (onReviewAdded) {
                onReviewAdded(reviewData);
            }
        } catch (err) {
            console.error('Failed to submit review:', err);
            setError(err.message || 'Failed to submit review. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form className="review-form" onSubmit={handleSubmit}>
            {error && <div className="form-error">{error}</div>}
            {success && <div className="form-success">Your review has been submitted successfully!</div>}

            <div className="form-group">
                <label htmlFor="userName">Your Name</label>
                <input
                    type="text"
                    id="userName"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="rating">Rating</label>
                <select
                    id="rating"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    required
                >
                    <option value="5">5 - Excellent</option>
                    <option value="4">4 - Good</option>
                    <option value="3">3 - Average</option>
                    <option value="2">2 - Below Average</option>
                    <option value="1">1 - Poor</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="comment">Your Review</label>
                <textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    rows="4"
                    required
                ></textarea>
            </div>

            <button
                type="submit"
                className="submit-review-btn"
                disabled={submitting}
            >
                {submitting ? 'Submitting...' : 'Submit Review'}
            </button>
        </form>
    );
}
