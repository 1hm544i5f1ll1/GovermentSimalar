import React from 'react';
import { clsx } from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'draft' | 'simulated' | 'proposed' | 'voted' | 'enacted' | 'low' | 'medium' | 'high';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span className={clsx(
      'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium',
      {
        'bg-gray-100 text-gray-800': variant === 'default',
        'bg-gray-600 text-gray-200': variant === 'draft',
        'bg-blue-600 text-blue-100': variant === 'simulated',
        'bg-yellow-600 text-yellow-100': variant === 'proposed',
        'bg-purple-600 text-purple-100': variant === 'voted',
        'bg-green-600 text-green-100': variant === 'enacted',
        'bg-green-100 text-green-800': variant === 'low',
        'bg-yellow-100 text-yellow-800': variant === 'medium',
        'bg-red-100 text-red-800': variant === 'high',
      },
      className
    )}>
      {children}
    </span>
  );
}