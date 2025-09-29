import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../components/Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    children: (
      <div style={{ padding: '2rem' }}>
        <h2>モーダルコンテンツ</h2>
        <p>ここにモーダルの内容が表示されます。</p>
      </div>
    ),
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
    children: (
      <div style={{ padding: '2rem' }}>
        <h2>モーダルコンテンツ</h2>
        <p>このモーダルは閉じられています。</p>
      </div>
    ),
  },
};