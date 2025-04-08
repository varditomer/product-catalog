'use client';

import { useEffect } from 'react';
import '../assets/styles/main.scss';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ProductProvider, useProductContext } from '@/store/ProductContext';

function AppContent({ children }) {
  const { fetchProducts } = useProductContext();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/catalog_favicon.ico" />
      </head>
      <body suppressHydrationWarning={true}>
        <ProductProvider>
          <AppContent>{children}</AppContent>
        </ProductProvider>
      </body>
    </html>
  );
}
