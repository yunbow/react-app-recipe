import React from 'react';
import { Input } from '../../../../components/Input';
import { Button } from '../../../../components/Button';
import styles from './SearchBox.module.css';

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  placeholder?: string;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  value,
  onChange,
  onSearch,
  placeholder = '料理名、食材などで検索...',
}) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className={styles.searchBox}>
      <Input
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        variant="search"
      />
      <Button
        onClick={onSearch}
        variant="primary"
        className={styles.searchButton}
      >
        検索
      </Button>
    </div>
  );
};