// src/app/api/products/route.js
import { getCollection } from '@/services/db.service';
import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        const productsCollection = await getCollection('products');
        const products = await productsCollection.find({}).toArray();

        return NextResponse.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        return NextResponse.json(
            { error: 'Failed to fetch products' },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        const data = await request.json();
        const productsCollection = await getCollection('products');

        // Validate required fields
        if (!data.name || !data.price || !data.description) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const result = await productsCollection.insertOne({
            ...data,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        return NextResponse.json({
            _id: result.insertedId,
            ...data
        }, { status: 201 });
    } catch (error) {
        console.error('Error creating product:', error);
        return NextResponse.json(
            { error: 'Failed to create product' },
            { status: 500 }
        );
    }
}
