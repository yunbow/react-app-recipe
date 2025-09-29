import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../components/Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['heading1', 'heading2', 'heading3', 'title', 'meta', 'description', 'tag', 'message', 'noResults'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    children: 'レシピ検索',
    variant: 'heading1',
  },
};

export const Heading2: Story = {
  args: {
    children: '簡単トマトパスタ',
    variant: 'heading2',
  },
};

export const Heading3: Story = {
  args: {
    children: '材料',
    variant: 'heading3',
  },
};

export const Title: Story = {
  args: {
    children: '簡単トマトパスタ',
    variant: 'title',
  },
};

export const MetaText: Story = {
  args: {
    children: '調理時間: 約20分',
    variant: 'meta',
  },
};

export const Description: Story = {
  args: {
    children: '20分で作れる簡単でおいしいトマトパスタのレシピです。トマトの酸味とバジルの香りが食欲をそそります。',
    variant: 'description',
  },
};

export const Tag: Story = {
  args: {
    children: 'パスタ',
    variant: 'tag',
  },
};