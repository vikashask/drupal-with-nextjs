import { Container } from '@/components/common';
import Link from 'next/link';

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Fresh & Healthy';
const siteSlogan = process.env.NEXT_PUBLIC_SITE_SLOGAN || 'Plant Based, Gluten Free, Made Fresh Daily';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/page/about' },
    { name: 'Contact', href: '/page/contact' },
    { name: 'Careers', href: '/page/careers' },
  ],
  products: [
    { name: 'All Products', href: '/products' },
    { name: 'Categories', href: '/categories' },
    { name: 'New Arrivals', href: '/products?sort=new' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/page/privacy' },
    { name: 'Terms of Service', href: '/page/terms' },
    { name: 'Cookie Policy', href: '/page/cookies' },
  ],
};

/**
 * Site footer component
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-white">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <Link href="/" className="inline-block">
                <span className="text-2xl font-bold text-white font-heading">
                  {siteName}
                </span>
              </Link>
              <p className="mt-4 text-gray-400 text-sm">
                {siteSlogan}
              </p>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Company
              </h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Products
              </h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Legal
              </h3>
              <ul className="mt-4 space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <p className="text-center text-gray-400 text-sm">
            &copy; {currentYear} {siteName}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
