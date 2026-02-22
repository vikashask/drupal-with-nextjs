import clsx from 'clsx';
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const sizeClasses = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-full',
};

/**
 * Container component for consistent page widths
 */
export function Container({ children, className, size = 'xl' }: ContainerProps) {
  return (
    <div
      className={clsx(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

/**
 * Section component for page sections
 */
export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={clsx('py-12 md:py-16 lg:py-20', className)}>
      {children}
    </section>
  );
}
