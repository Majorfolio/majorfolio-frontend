import { Meta, StoryObj } from '@storybook/react';
import UploadButton from '../components/common/UploadButton';

const meta = {
  title: 'UploadButton',
  component: UploadButton,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Preview: Story = {
  args: {
    type: 'preview',
  },
};

export const Action: Story = {
  args: {
    type: 'action',
  },
};
