import React from 'react';
import { Text } from '../../../../components/Text';
import { SearchBox } from '../SearchBox';
import { FilterControls } from '../FilterControls';
import styles from './Header.module.css';

interface HeaderProps {
  searchValue: string;
  categoryValue: string;
  timeValue: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onTimeChange: (value: string) => void;
  onSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchValue,
  categoryValue,
  timeValue,
  onSearchChange,
  onCategoryChange,
  onTimeChange,
  onSearch,
}) => {
  return (
    <header className={styles.header}>
      <Text variant="heading1">レシピ検索</Text>
      <SearchBox
        value={searchValue}
        onChange={onSearchChange}
        onSearch={onSearch}
      />
      <FilterControls
        categoryValue={categoryValue}
        timeValue={timeValue}
        onCategoryChange={onCategoryChange}
        onTimeChange={onTimeChange}
      />
    </header>
  );
};