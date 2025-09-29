import React from 'react';
import styles from './Input.module.css';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  variant?: 'search';
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  onKeyPress,
  placeholder,
  variant,
  className,
}) => {
  const inputClass = [
    styles.input,
    variant && styles[variant],
    className,
  ].filter(Boolean).join(' ');

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      className={inputClass}
    />
  );
};