// src/app/page.js
import ProductList from '@/components/ProductList';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductList />
    </>
  );
}
