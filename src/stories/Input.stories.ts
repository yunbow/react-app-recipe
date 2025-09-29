import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    onKeyPress: { action: 'key pressed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: 'テキストを入力してください',
  },
};

export const Search: Story = {
  args: {
    value: '',
    placeholder: '料理名、食材などで検索...',
    variant: 'search',
  },
};

export const WithValue: Story = {
  args: {
    value: 'トマトパスタ',
    placeholder: '料理名、食材などで検索...',
    variant: 'search',
  },
};