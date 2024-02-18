import { Meta, StoryObj } from '@storybook/react';
import UploadInProgresStep from '../pages/Upload/UploadInProgressStep';

const meta = {
  title: 'UploadInProgressStep',
  component: UploadInProgresStep,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
