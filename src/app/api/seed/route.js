// src/app/api/seed/route.js
import { getCollection } from '@/services/db.service';
import { NextResponse } from 'next/server';
import { productSeedData } from '@/services/seed-data';

export async function GET(request) {
    try {
        const productsCollection = await getCollection('products');

        // Clear existing products
        await productsCollection.deleteMany({});

        // Insert seed data
        const result = await productsCollection.insertMany(productSeedData);

        return NextResponse.json({
            success: true,
            message: `Inserted ${result.insertedCount} products`,
            insertedIds: result.insertedIds
        });
    } catch (error) {
        console.error('Error seeding database:', error);
        return NextResponse.json(
            { error: 'Failed to seed database', details: error.message },
            { status: 500 }
        );
    }
}
