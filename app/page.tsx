import { FeaturedProducts, HeroSection, SimpleHero } from '@/components/home';
import { CategorySection } from '@/components/home/CategorySection';
import { REVALIDATE_TIME, fetchCategories, fetchFeaturedProducts, fetchHomepage } from '@/lib/fetchDrupal';
import { Metadata } from 'next';

// Enable ISR
export const revalidate = REVALIDATE_TIME;

export async function generateMetadata(): Promise<Metadata> {
  const page = await fetchHomepage();
  console.log("🚀 ~ generateMetadata ~ page:", page)
  
  return {
    title: page?.metaTitle || 'Welcome',
    description: page?.metaDescription || 'A modern headless CMS powered by Drupal and Next.js',
  };
}

export default async function HomePage() {
  // Fetch data in parallel from Drupal
  const [homepage, featuredProducts, categories] = await Promise.all([
    fetchHomepage(),
    fetchFeaturedProducts(6),
    fetchCategories(),
  ]);

  return (
    <>
      {/* Hero Section - Content from Drupal */}
      {homepage ? (
        <HeroSection page={homepage} />
      ) : (
        <SimpleHero
          title="Fresh & Healthy"
          description="Discover our range of fresh, healthy dips and spreads. Create your homepage content in Drupal with the slug 'home'."
        />
      )}

      {/* Featured Products - From Drupal */}
      <FeaturedProducts products={featuredProducts} />

      {/* Categories Section - From Drupal */}
      {categories.length > 0 && (
        <CategorySection categories={categories} />
      )}
    </>
  );
}
