import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Rendering Demos',
  description: 'Interactive demonstrations of SSR, ISR, and CSR in Next.js',
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
