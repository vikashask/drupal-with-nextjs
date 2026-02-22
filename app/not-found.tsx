import { Container } from '@/components/common';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center">
      <Container>
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 font-heading">404</h1>
          <p className="mt-4 text-xl text-gray-600">
            Oops! The page you're looking for doesn't exist.
          </p>
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
