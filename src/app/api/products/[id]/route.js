// src/app/api/products/[id]/route.js
import { getCollection } from '@/services/db.service';
import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';

export async function GET(request, { params }) {
    try {
        const { id } = await params;

        if (!ObjectId.isValid(id)) {
            return NextResponse.json(
                { error: 'Invalid product ID' },
                { status: 400 }
            );
        }

        const productsCollection = await getCollection('products');
        const product = await productsCollection.findOne({ _id: new ObjectId(id) });

        if (!product) {
            return NextResponse.json(
                { error: 'Product not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        return NextResponse.json(
            { error: 'Failed to fetch product' },
            { status: 500 }
        );
    }
}
