import { OptimizedImage } from '@/components/common';
import { stripHtml, truncateText } from '@/lib/transform';
import { Product } from '@/types';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

/**
 * Product card component for grid displays
 */
export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        {product.image ? (
          <OptimizedImage
            image={product.image}
            fill
            priority={priority}
            className="group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="text-4xl mb-2">🥗</div>
            <span className="text-gray-500 text-sm font-medium">Product Image</span>
            <span className="text-gray-400 text-xs">Coming Soon</span>
          </div>
        )}
        
        {/* Category Badge */}
        {product.category && (
          <span className="absolute top-3 left-3 bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded-full">
            {product.category.name}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
          {product.title}
        </h3>
        {product.description && (
          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
            {truncateText(stripHtml(product.description), 100)}
          </p>
        )}
      </div>
    </Link>
  );
}
