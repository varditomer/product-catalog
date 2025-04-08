// src/services/seed-data.js
export const productSeedData = [
    {
        name: 'Wireless Headphones',
        description: 'High-quality wireless headphones with noise cancellation technology and long battery life.',
        price: 149.99,
        imageUrl: '/product-images/product-list-images/headphones.jpg',
        detailImageUrl: '/product-images/product-detail-images/headphones.jpg',
        category: 'Electronics',
        reviews: [
            {
                userName: 'AudioFan',
                rating: 5,
                comment: 'Amazing sound quality and the battery lasts forever!',
                createdAt: new Date()
            },
            {
                userName: 'MusicLover',
                rating: 4,
                comment: 'Great headphones, but the ear cushions could be softer.',
                createdAt: new Date()
            }
        ],
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Smart Watch',
        description: 'Fitness tracking smartwatch with heart rate monitor, sleep tracking, and smartphone notifications.',
        price: 199.99,
        imageUrl: '/product-images/product-list-images/smartwatch.jpg',
        detailImageUrl: '/product-images/product-detail-images/smartwatch.jpg',
        category: 'Electronics',
        reviews: [
            {
                userName: 'FitnessGuru',
                rating: 5,
                comment: 'Tracks my workouts perfectly and the battery lasts for days!',
                createdAt: new Date()
            }
        ],
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Coffee Maker',
        description: 'Programmable coffee maker with thermal carafe and auto-brew functionality.',
        price: 79.99,
        imageUrl: '/product-images/product-list-images/coffeemaker.jpg',
        detailImageUrl: '/product-images/product-detail-images/coffeemaker.jpg',
        category: 'Home Appliances',
        reviews: [],
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Yoga Mat',
        description: 'Non-slip, eco-friendly yoga mat with alignment lines for proper positioning.',
        price: 39.99,
        imageUrl: '/product-images/product-list-images/yogamat.jpg',
        detailImageUrl: '/product-images/product-detail-images/yogamat.jpg',
        category: 'Fitness',
        reviews: [
            {
                userName: 'YogaPractitioner',
                rating: 5,
                comment: 'The alignment lines are super helpful for my practice!',
                createdAt: new Date()
            },
            {
                userName: 'FlexibilityFan',
                rating: 4,
                comment: 'Good thickness and grip, but could be a bit wider.',
                createdAt: new Date()
            }
        ],
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Desk Lamp',
        description: 'Adjustable LED desk lamp with multiple brightness levels and color temperatures.',
        price: 45.99,
        imageUrl: '/product-images/product-list-images/desklamp.jpg',
        detailImageUrl: '/product-images/product-detail-images/desklamp.jpg',
        category: 'Home Decor',
        reviews: [
            {
                userName: 'NightOwl',
                rating: 5,
                comment: 'Perfect for late night work sessions! The adjustable color temperature is amazing.',
                createdAt: new Date()
            }
        ],
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: 'Portable Bluetooth Speaker',
        description: 'Waterproof portable speaker with 360-degree sound and 20-hour battery life.',
        price: 89.99,
        imageUrl: '/product-images/product-list-images/speaker.jpg',
        detailImageUrl: '/product-images/product-detail-images/speaker.jpg',
        category: 'Electronics',
        reviews: [
            {
                userName: 'BeachGoer',
                rating: 5,
                comment: 'Took this to the beach and it was amazing! Waterproof feature works great.',
                createdAt: new Date()
            },
            {
                userName: 'PartyHost',
                rating: 4,
                comment: 'Good sound quality but could be a bit louder for outdoor parties.',
                createdAt: new Date()
            }
        ],
        createdAt: new Date(),
        updatedAt: new Date()
    }
];
