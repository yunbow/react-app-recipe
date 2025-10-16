import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2025 レシピ検索アプリ</p>
    </footer>
  );
};