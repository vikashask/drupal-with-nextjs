import { Container } from '@/components/common';
import Link from 'next/link';

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Fresh & Healthy';

const mainNav = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/page/about' },
];

const demoNav = [
  { name: 'SSR', href: '/demo/ssr' },
  { name: 'ISR', href: '/demo/isr' },
  { name: 'CSR', href: '/demo/csr' },
  { name: 'Comparison', href: '/demo/comparison' },
  { name: 'Manager', href: '/demo/manager' },
];

/**
 * Site header component
 */
export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-primary-600 font-heading">
              {siteName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {/* Main Links */}
            {mainNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors text-sm"
              >
                {item.name}
              </Link>
            ))}

            {/* Demos Dropdown */}
            <div className="relative group">
              <button className="text-gray-600 hover:text-primary-600 font-medium transition-colors text-sm flex items-center gap-1">
                Demos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {demoNav.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary-600 first:rounded-t-md last:rounded-b-md"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <MobileMenuButton />
        </div>
      </Container>
    </header>
  );
}

/**
 * Mobile menu button (client component needed for interactivity)
 */
function MobileMenuButton() {
  return (
    <button
      type="button"
      className="md:hidden p-2 text-gray-600 hover:text-gray-900"
      aria-label="Open menu"
    >
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
}
