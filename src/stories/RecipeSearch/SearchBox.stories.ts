import type { Meta, StoryObj } from '@storybook/react';
import { SearchBox } from '../../features/recipe-search/components/SearchBox';

const meta: Meta<typeof SearchBox> = {
  title: 'Features/RecipeSearch/Components/SearchBox',
  component: SearchBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    onSearch: { action: 'searched' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
  },
};

export const WithValue: Story = {
  args: {
    value: 'トマトパスタ',
  },
};