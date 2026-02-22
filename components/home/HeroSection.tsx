import { Button, Container, OptimizedImage } from '@/components/common';
import { Page } from '@/types';

interface HeroSectionProps {
  page: Page;
}

/**
 * Hero section component for the homepage
 */
export function HeroSection({ page }: HeroSectionProps) {
  const hasImage = Boolean(page.heroImage);

  return (
    <section className={`relative min-h-[500px] md:min-h-[600px] flex items-center ${!hasImage ? 'bg-gradient-to-br from-primary-600 to-primary-800' : ''}`}>
      {/* Background Image */}
      {page.heroImage && (
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            image={page.heroImage}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/* Content */}
      <Container className="relative z-10">
        <div className={`max-w-2xl ${hasImage ? 'text-white' : 'text-gray-900'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading">
            {page.title}
          </h1>
          {page.body && (
            <div
              className={`mt-6 text-lg md:text-xl max-w-none ${hasImage ? 'text-gray-100 prose prose-invert' : 'text-gray-700 prose'}`}
              dangerouslySetInnerHTML={{ __html: page.body }}
            />
          )}
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/products" size="lg">
              View Products
            </Button>
            <Button
              href="/page/about"
              variant="outline"
              size="lg"
              className={hasImage ? 'border-white text-white hover:bg-white/10' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}
            >
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/**
 * Simple hero section without background image
 */
export function SimpleHero({ title, description }: { title: string; description?: string }) {
  return (
    <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-lg text-primary-100">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
