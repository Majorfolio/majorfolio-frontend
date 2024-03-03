import { Meta, StoryObj } from '@storybook/react';
import RowButton from '../components/common/RowButton';

const meta = {
  title: 'RowButton',
  component: RowButton,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '북마크한 자료',
  },
};
