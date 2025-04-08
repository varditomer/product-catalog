// src/components/layout/Header.js
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <Link href="/" className="logo">
                    <Image
                        src="/images/catalog_logo.png"
                        alt="Product Catalog"
                        width={40}
                        height={40}
                    />
                    <span>Product Catalog</span>
                </Link>
            </div>
        </header>
    );
}
