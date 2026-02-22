import clsx from 'clsx';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Loading spinner component
 */
export function LoadingSpinner({ size = 'md', className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  return (
    <div className={clsx('flex justify-center items-center', className)}>
      <div
        className={clsx(
          'animate-spin rounded-full border-2 border-gray-300 border-t-primary-600',
          sizeClasses[size]
        )}
      />
    </div>
  );
}

interface LoadingStateProps {
  message?: string;
}

/**
 * Full page loading state
 */
export function LoadingState({ message = 'Loading...' }: LoadingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
      <LoadingSpinner size="lg" />
      <p className="text-gray-500">{message}</p>
    </div>
  );
}
