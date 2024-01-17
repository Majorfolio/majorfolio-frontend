import { Meta, StoryObj } from '@storybook/react';
import TextField from '../components/common/TextField';

const meta = {
  title: 'TextField',
  component: TextField,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {
    type: 'title',
    disabled: false,
    active: true,
  },
};

export const TitleDisabled: Story = {
  args: {
    type: 'title',
    disabled: true,
    active: false,
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    disabled: false,
    active: true,
  },
};

export const PasswordDisabled: Story = {
  args: {
    type: 'title',
    disabled: true,
    active: false,
  },
};
