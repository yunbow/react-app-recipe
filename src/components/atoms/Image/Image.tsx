import React from 'react';
import styles from './Image.module.css';

interface ImageProps {
  src: string;
  alt: string;
  variant?: 'recipeCard' | 'recipeDetails';
  className?: string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  variant,
  className,
}) => {
  const imageClass = [
    styles.image,
    variant && styles[variant],
    className,
  ].filter(Boolean).join(' ');

  return (
    <img
      src={src}
      alt={alt}
      className={imageClass}
    />
  );
};