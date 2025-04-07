// src/app/layout.js
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Product Catalog',
  description: 'Browse our products and leave reviews',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/catalog_favicon.ico" />
      </head>
      <body>
        <div className="app-container">
          <Header />
          <main className="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
