import { Container, OptimizedImage, Section } from '@/components/common';
import {
    fetchPageBySlug,
    getAllPageSlugs,
    REVALIDATE_TIME,
} from '@/lib/fetchDrupal';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Enable ISR
export const revalidate = REVALIDATE_TIME;

interface PageProps {
  params: { slug: string };
}

// Generate static paths for all pages
export async function generateStaticParams() {
  const slugs = await getAllPageSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata from Drupal content
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = await fetchPageBySlug(params.slug);

  if (!page) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: page.metaTitle || page.title,
    description: page.metaDescription || '',
    openGraph: {
      title: page.metaTitle || page.title,
      description: page.metaDescription || '',
      type: 'website',
      images: page.heroImage
        ? [
            {
              url: page.heroImage.url,
              alt: page.heroImage.alt,
            },
          ]
        : [],
    },
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const page = await fetchPageBySlug(params.slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      {/* Hero Section with Image */}
      {page.heroImage && (
        <section className="relative h-[300px] md:h-[400px]">
          <OptimizedImage
            image={page.heroImage}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center">
            <Container>
              <h1 className="text-4xl md:text-5xl font-bold text-white font-heading">
                {page.title}
              </h1>
            </Container>
          </div>
        </section>
      )}

      {/* Content */}
      <Section>
        <Container size="md">
          {/* Title (if no hero image) */}
          {!page.heroImage && (
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading mb-8">
              {page.title}
            </h1>
          )}

          {/* Body Content */}
          {page.body && (
            <div
              className="prose prose-lg prose-gray max-w-none"
              dangerouslySetInnerHTML={{ __html: page.body }}
            />
          )}
        </Container>
      </Section>
    </>
  );
}
