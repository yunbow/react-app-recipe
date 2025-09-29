import React from 'react';
import { Select } from '../../../../components/Select';
import styles from './FilterControls.module.css';

interface FilterControlsProps {
  categoryValue: string;
  timeValue: string;
  onCategoryChange: (value: string) => void;
  onTimeChange: (value: string) => void;
}

const categoryOptions = [
  { value: '', label: 'カテゴリー選択' },
  { value: 'main', label: '主菜' },
  { value: 'side', label: '副菜' },
  { value: 'soup', label: 'スープ' },
  { value: 'dessert', label: 'デザート' },
];

const timeOptions = [
  { value: '', label: '調理時間' },
  { value: '15', label: '15分以内' },
  { value: '30', label: '30分以内' },
  { value: '60', label: '1時間以内' },
  { value: 'more', label: '1時間以上' },
];

export const FilterControls: React.FC<FilterControlsProps> = ({
  categoryValue,
  timeValue,
  onCategoryChange,
  onTimeChange,
}) => {
  return (
    <div className={styles.filterControls}>
      <Select
        value={categoryValue}
        onChange={onCategoryChange}
        options={categoryOptions}
        className={styles.select}
      />
      <Select
        value={timeValue}
        onChange={onTimeChange}
        options={timeOptions}
        className={styles.select}
      />
    </div>
  );
};