import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../components/Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

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

export const Category: Story = {
  args: {
    value: '',
    options: categoryOptions,
  },
};

export const Time: Story = {
  args: {
    value: '',
    options: timeOptions,
  },
};

export const CategorySelected: Story = {
  args: {
    value: 'main',
    options: categoryOptions,
  },
};