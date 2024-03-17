import { Meta, StoryObj } from '@storybook/react';
import UploadCautionStep from '../pages/Upload/UploadCautionStep';

const meta = {
  title: 'Pages/Upload/UploadCautionStep',
  component: UploadCautionStep,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
