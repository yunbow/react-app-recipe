import type { Meta, StoryObj } from '@storybook/react';
import { RecipeSearchApp } from '../components/organisms';

const meta: Meta<typeof RecipeSearchApp> = {
  title: 'Organisms/RecipeSearchApp',
  component: RecipeSearchApp,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};