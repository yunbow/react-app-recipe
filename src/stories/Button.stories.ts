import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'close'],
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '検索',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'セカンダリボタン',
    variant: 'secondary',
  },
};

export const Close: Story = {
  args: {
    children: '×',
    variant: 'close',
  },
};