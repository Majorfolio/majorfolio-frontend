import { Meta, StoryObj } from '@storybook/react';
import Signup from '../pages/Signup';

const meta = {
  title: 'Signup',
  component: Signup,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmailNotConfirmed = {};

export const EmailConfirmed = {
  args: {
    isEmailConfirmed: true,
  },
};
