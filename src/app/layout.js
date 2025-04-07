import '../assets/styles/main.scss';

export const metadata = {
  title: 'Product Catalog',
  description: 'Browse our products and leave reviews',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
