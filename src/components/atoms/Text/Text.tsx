import React from 'react';
import styles from './Text.module.css';

interface TextProps {
  children: React.ReactNode;
  variant?: 'heading1' | 'heading2' | 'heading3' | 'title' | 'meta' | 'description' | 'tag' | 'message' | 'noResults';
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'text',
  as,
  className,
}) => {
  const Component = as || getDefaultElement(variant);
  const textClass = [styles.text, styles[variant], className].filter(Boolean).join(' ');

  return (
    <Component className={textClass}>
      {children}
    </Component>
  );
};

function getDefaultElement(variant: string): keyof JSX.IntrinsicElements {
  switch (variant) {
    case 'heading1':
      return 'h1';
    case 'heading2':
      return 'h2';
    case 'heading3':
      return 'h3';
    case 'title':
      return 'h3';
    case 'tag':
      return 'span';
    case 'message':
    case 'noResults':
      return 'div';
    default:
      return 'p';
  }
}