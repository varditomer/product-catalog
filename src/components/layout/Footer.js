// src/components/layout/Footer.js
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p>&copy; {currentYear} Product Catalog by Tomer Vardi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
