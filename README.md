# Product Catalog & Reviews Application

A full-stack Next.js application featuring product browsing and review functionality. Built with React, Next.js, MongoDB, and SCSS following component-driven development principles.

![Product Catalog Screenshot](public/images/app-screenshot.png)

## Features

- Browse a catalog of products on the homepage
- View detailed product information on individual product pages
- Read product reviews from other users
- Submit your own product reviews
- Responsive design for mobile, tablet, and desktop devices

## Tech Stack

- **Frontend:** React.js, Next.js
- **Styling:** SCSS with custom component design
- **Backend:** Next.js API routes
- **Database:** MongoDB
- **State Management:** React Context API

## Live Demo

You can access the live version of this application at: [Product Catalog App](https://product-catalog-snowy.vercel.app/)

Feel free to browse the products and leave reviews without any installation required. The application is fully functional and ready to use.

### Quick Start with Live Demo
If you just want to explore the application without setting up locally:

1. Visit the [Product Catalog](https://product-catalog-alpha.vercel.app/)
2. Browse products on the homepage
3. Click on any product to view details and reviews
4. Add your own review using the form at the bottom of any product page

## Project Structure
```bash
├── public/                      # Static assets and images
│   ├── images/                  # App images
│   ├── product-images/          # Product images
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── api/                 # API Routes
│   │   ├── products/            # Product detail pages
│   │   ├── page.js              # Home page
│   │   └── layout.js            # Root layout
│   ├── assets/                  # Assets
│   │   ├── styles/              # SCSS files
│   ├── components/              # React components
│   │   ├── layout/              # Layout components
│   │   ├── ProductCard.js       # Product card component
│   │   └── ReviewForm.js        # Review form component
│   ├── services/                # API services
│   │   ├── http.service.js      # HTTP client
│   │   ├── product.service.js   # Product data service
│   │   └── review.service.js    # Review data service
│   └── store/                   # State management
│       └── ProductContext.js    # Product context and provider
```
## Getting Started

### Prerequisites

- Node.js 18.x or later
- MongoDB Atlas account or local MongoDB installation

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/product-catalog.git
   cd product-catalog
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env.local file in the root directory with your MongoDB connection string:
   ```bash
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/product-catalog
   MONGODB_DB=product-catalog
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open http://localhost:3000 in your browser to see the application.
6. Seed the database with initial product data:
    * Visit http://localhost:3000/api/seed in your browser.

## Key Features Implementation

### Component-Driven Development
The application is built using reusable components such as `ProductCard`, `ProductList`, and `ReviewForm`. These components can be easily tested and maintained independently.

### State Management
Product data is managed through React Context API, allowing efficient data sharing between components and preventing unnecessary API calls when navigating between pages.

### Responsive Design
The application is fully responsive with optimized layouts for mobile, tablet, and desktop devices using SCSS with media queries.

### API Integration
Next.js API routes provide the backend functionality, connecting to MongoDB for data storage and retrieval.

## Deployment

The application can be deployed to Vercel with minimal configuration:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in the Vercel dashboard
4. Deploy

## Future Improvements

* User authentication
* Shopping cart functionality
* Product filtering and search
* Admin dashboard for product management
* Unit and integration tests

## License

[MIT](LICENSE)
