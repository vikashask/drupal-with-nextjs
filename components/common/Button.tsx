import clsx from 'clsx';
import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
}

interface ButtonProps extends ButtonBaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  href?: never;
}

interface ButtonLinkProps extends ButtonBaseProps {
  href: string;
  external?: boolean;
}

type Props = ButtonProps | ButtonLinkProps;

const variantClasses = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
  secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500',
  outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
  ghost: 'text-gray-600 hover:bg-gray-100 focus:ring-gray-500',
};

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-7 py-3 text-lg',
};

/**
 * Reusable button component with link support
 */
export function Button(props: Props) {
  const {
    variant = 'primary',
    size = 'md',
    children,
    className,
    ...rest
  } = props;

  const baseClasses = clsx(
    'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if ('href' in props && props.href) {
    const { href, external, ...linkRest } = props as ButtonLinkProps;
    
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
