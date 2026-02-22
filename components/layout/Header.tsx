import { Container } from '@/components/common';
import Link from 'next/link';

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Fresh & Healthy';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/page/about' },
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
            <span className="text-2xl font-bold text-primary-600 font-heading">
              {siteName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
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
