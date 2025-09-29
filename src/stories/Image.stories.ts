import type { Meta, StoryObj } from '@storybook/react';
import { Image } from '../components/Image';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['recipeCard', 'recipeDetails'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const RecipeCard: Story = {
  args: {
    src: 'https://via.placeholder.com/300x200?text=トマトパスタ',
    alt: 'トマトパスタ',
    variant: 'recipeCard',
  },
};

export const RecipeDetails: Story = {
  args: {
    src: 'https://via.placeholder.com/300x200?text=トマトパスタ',
    alt: 'トマトパスタ',
    variant: 'recipeDetails',
  },
};