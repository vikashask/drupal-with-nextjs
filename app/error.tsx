'use client';

import { ErrorState } from '@/components/common';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <ErrorState
      title="Something went wrong"
      message="An unexpected error occurred. Please try again."
      retry={reset}
    />
  );
}
