import type { Meta, StoryObj } from '@storybook/react';
import { FilterControls } from '../../features/recipe-search/components/FilterControls';

const meta: Meta<typeof FilterControls> = {
  title: 'Features/RecipeSearch/Components/FilterControls',
  component: FilterControls,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onCategoryChange: { action: 'category changed' },
    onTimeChange: { action: 'time changed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    categoryValue: '',
    timeValue: '',
  },
};

export const WithSelection: Story = {
  args: {
    categoryValue: 'main',
    timeValue: '30',
  },
};