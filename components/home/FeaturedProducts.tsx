import { Button, Container, Section } from '@/components/common';
import { ProductGrid } from '@/components/products';
import { Product } from '@/types';

interface FeaturedProductsProps {
  products: Product[];
  title?: string;
  showViewAll?: boolean;
}

/**
 * Featured products section for the homepage
 */
export function FeaturedProducts({
  products,
  title = 'Featured Products',
  showViewAll = true,
}: FeaturedProductsProps) {
  return (
    <Section className="bg-gray-50">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading">
            {title}
          </h2>
          {showViewAll && (
            <Button href="/products" variant="ghost">
              View All
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          )}
        </div>
        
        <ProductGrid products={products} columns={4} />
      </Container>
    </Section>
  );
}
