import { Container, Section } from '@/components/common';
import { SimpleHero } from '@/components/home';
import { ProductGrid } from '@/components/products';
import { fetchCategories, fetchProducts, REVALIDATE_TIME } from '@/lib/fetchDrupal';
import { Metadata } from 'next';

// Enable ISR
export const revalidate = REVALIDATE_TIME;

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our complete product catalog',
};

export default async function ProductsPage() {
  // Fetch products and categories in parallel
  const [products, categories] = await Promise.all([
    fetchProducts(),
    fetchCategories(),
  ]);

  return (
    <>
      <SimpleHero
        title="Our Products"
        description="Discover our complete range of high-quality products"
      />

      <Section className="bg-gray-50">
        <Container>
          {/* Filters/Categories */}
          {categories.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Categories
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-medium">
                  All Products
                </span>
                {categories.map((category) => (
                  <span
                    key={category.id}
                    className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium hover:border-primary-500 hover:text-primary-600 cursor-pointer transition-colors"
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Product Count */}
          <p className="text-gray-600 mb-6">
            Showing {products.length} product{products.length !== 1 ? 's' : ''}
          </p>

          {/* Product Grid */}
          <ProductGrid products={products} columns={4} />
        </Container>
      </Section>
    </>
  );
}
