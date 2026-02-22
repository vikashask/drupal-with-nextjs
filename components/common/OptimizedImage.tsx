import { ImageData } from '@/types';
import clsx from 'clsx';
import Image from 'next/image';

interface OptimizedImageProps {
  image: ImageData;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

/**
 * Optimized image component using Next.js Image
 * Handles Drupal media images with proper fallbacks
 */
export function OptimizedImage({
  image,
  fill = false,
  width,
  height,
  priority = false,
  className,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
}: OptimizedImageProps) {
  if (!image?.url) {
    return (
      <div
        className={clsx(
          'bg-gray-200 flex items-center justify-center',
          className
        )}
        style={!fill ? { width, height } : undefined}
      >
        <span className="text-gray-400 text-sm">No image</span>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={image.url}
        alt={image.alt || ''}
        fill
        priority={priority}
        className={clsx('object-cover', className)}
        sizes={sizes}
      />
    );
  }

  return (
    <Image
      src={image.url}
      alt={image.alt || ''}
      width={width || image.width || 800}
      height={height || image.height || 600}
      priority={priority}
      className={className}
      sizes={sizes}
    />
  );
}
