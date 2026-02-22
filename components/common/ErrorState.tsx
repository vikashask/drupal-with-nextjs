interface ErrorStateProps {
  title?: string;
  message?: string;
  retry?: () => void;
}

/**
 * Error state component
 */
export function ErrorState({
  title = 'Something went wrong',
  message = 'An error occurred while loading the content.',
  retry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 text-center px-4">
      <div className="text-red-500">
        <svg
          className="w-16 h-16 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <p className="text-gray-500 max-w-md">{message}</p>
      {retry && (
        <button
          onClick={retry}
          className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
}

/**
 * Not found state component
 */
export function NotFoundState({ message = 'The page you are looking for does not exist.' }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 text-center px-4">
      <div className="text-gray-400">
        <svg
          className="w-16 h-16 mx-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h2 className="text-xl font-semibold text-gray-900">Not Found</h2>
      <p className="text-gray-500 max-w-md">{message}</p>
    </div>
  );
}
