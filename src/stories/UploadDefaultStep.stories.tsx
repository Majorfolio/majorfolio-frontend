import { Meta, StoryObj } from '@storybook/react';
import UploadDefaultStep from '../pages/Upload/UploadDefaultStep';

const meta = {
  title: 'Pages/Upload/UploadDefaultStep',
  component: UploadDefaultStep,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {};
