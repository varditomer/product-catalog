// src/app/api/reviews/route.js
import { getCollection } from '@/services/db.service';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

export async function POST(request) {
    try {
        const data = await request.json();
        const productsCollection = await getCollection('products');

        // Validate required fields
        if (!data.productId || !data.rating || !data.comment || !data.userName) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Convert string ID to ObjectId
        const productId = new ObjectId(data.productId);

        // Create review object
        const review = {
            userName: data.userName,
            rating: Number(data.rating),
            comment: data.comment,
            createdAt: new Date()
        };

        // Add review to product
        const result = await productsCollection.updateOne(
            { _id: productId },
            {
                $push: { reviews: review },
                $set: { updatedAt: new Date() }
            }
        );

        if (result.matchedCount === 0) {
            return NextResponse.json(
                { error: 'Product not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            success: true,
            review
        }, { status: 201 });
    } catch (error) {
        console.error('Error adding review:', error);
        return NextResponse.json(
            { error: 'Failed to add review' },
            { status: 500 }
        );
    }
}
