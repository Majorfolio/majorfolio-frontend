import { Meta, StoryObj } from '@storybook/react';
import Dropdown from '../components/common/Dropdown';

const meta = {
  title: 'Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: ['건국대학교', '국민대학교'],
    category: '학교',
  },
};
