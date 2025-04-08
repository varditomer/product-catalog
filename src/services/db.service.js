// src/services/db.service.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
    // Check the cached connection
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }

    if (!uri) {
        throw new Error('Please define the MONGODB_URI environment variable');
    }

    if (!dbName) {
        throw new Error('Please define the MONGODB_DB environment variable');
    }

    // Connect to cluster - removed deprecated options
    let client = new MongoClient(uri);

    await client.connect();
    let db = client.db(dbName);

    // Set cache
    cachedClient = client;
    cachedDb = db;

    return { client, db };
}

export async function getCollection(collectionName) {
    try {
        const { db } = await connectToDatabase();
        return db.collection(collectionName);
    } catch (error) {
        console.error('Failed to get MongoDB collection:', error);
        throw error;
    }
}
