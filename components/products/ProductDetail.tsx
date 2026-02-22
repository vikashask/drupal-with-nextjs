import { Button, Container, OptimizedImage } from '@/components/common';
import { Product } from '@/types';
import Link from 'next/link';

interface ProductDetailProps {
  product: Product;
}

/**
 * Product detail component for product pages
 */
export function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="py-8 md:py-12">
      <Container>
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-primary-600">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/products" className="text-gray-500 hover:text-primary-600">
                Products
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">{product.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image */}
          <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-100">
            {product.image ? (
              <OptimizedImage
                image={product.image}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-400">No image available</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col">
            {/* Category */}
            {product.category && (
              <Link
                href={`/categories/${product.category.slug}`}
                className="inline-block text-primary-600 text-sm font-medium mb-2 hover:underline"
              >
                {product.category.name}
              </Link>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">
              {product.title}
            </h1>

            {/* Description */}
            {product.description && (
              <div
                className="mt-6 prose prose-gray max-w-none"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            )}

            {/* Nutritional Info */}
            {product.nutritionalInfo && (
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  Nutritional Information
                </h2>
                <div
                  className="prose prose-sm prose-gray max-w-none bg-gray-50 p-4 rounded-lg"
                  dangerouslySetInnerHTML={{ __html: product.nutritionalInfo }}
                />
              </div>
            )}

            {/* Ingredients */}
            {product.ingredients && (
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  Ingredients
                </h2>
                <div
                  className="prose prose-sm prose-gray max-w-none"
                  dangerouslySetInnerHTML={{ __html: product.ingredients }}
                />
              </div>
            )}

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/products" variant="outline">
                Back to Products
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
