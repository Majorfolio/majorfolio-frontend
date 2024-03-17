import { Meta, StoryObj } from '@storybook/react';
import UploadGuidelineStep from '../pages/Upload/UploadGuidelineStep';

const meta = {
  title: 'Pages/Upload/UploadGuidelineStep',
  component: UploadGuidelineStep,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
