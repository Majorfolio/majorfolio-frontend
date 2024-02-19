import { Meta, StoryObj } from '@storybook/react';
import UploadCollectPhoneNumberStep from '../pages/Upload/UploadCollectPhoneNumberStep';

const meta = {
  title: 'UploadCollectPhoneNumberStep',
  component: UploadCollectPhoneNumberStep,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
