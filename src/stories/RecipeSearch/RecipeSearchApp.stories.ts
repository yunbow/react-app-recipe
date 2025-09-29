import type { Meta, StoryObj } from '@storybook/react';
import { RecipeSearchApp } from '../../features/recipe-search/RecipeSearchApp';

const meta: Meta<typeof RecipeSearchApp> = {
  title: 'Features/RecipeSearch/RecipeSearchApp',
  component: RecipeSearchApp,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};