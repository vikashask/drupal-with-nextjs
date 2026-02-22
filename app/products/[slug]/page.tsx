import { Container, Section } from '@/components/common';
import { ProductDetail, ProductGrid } from '@/components/products';
import {
  fetchFeaturedProducts,
  fetchProductBySlug,
  getAllProductSlugs,
  REVALIDATE_TIME,
} from '@/lib/fetchDrupal';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Enable ISR
export const revalidate = REVALIDATE_TIME;

interface PageProps {
  params: { slug: string };
}

// Generate static paths for all products
export async function generateStaticParams() {
  const slugs = await getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata from Drupal content
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = await fetchProductBySlug(params.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: product.metaTitle || product.title,
    description: product.metaDescription || `Learn more about ${product.title}`,
    openGraph: {
      title: product.metaTitle || product.title,
      description: product.metaDescription || '',
      type: 'website',
      images: product.image
        ? [
            {
              url: product.image.url,
              alt: product.image.alt,
            },
          ]
        : [],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const [product, relatedProducts] = await Promise.all([
    fetchProductBySlug(params.slug),
    fetchFeaturedProducts(4),
  ]);

  if (!product) {
    notFound();
  }

  // Filter out current product from related products
  const filteredRelated = relatedProducts.filter((p) => p.id !== product.id);

  return (
    <>
      <ProductDetail product={product} />

      {/* Related Products */}
      {filteredRelated.length > 0 && (
        <Section className="bg-gray-50">
          <Container>
            <h2 className="text-2xl font-bold text-gray-900 font-heading mb-8">
              Related Products
            </h2>
            <ProductGrid products={filteredRelated.slice(0, 4)} columns={4} />
          </Container>
        </Section>
      )}
    </>
  );
}
