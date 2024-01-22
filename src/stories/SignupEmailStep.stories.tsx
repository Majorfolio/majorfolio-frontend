import { Meta, StoryObj } from '@storybook/react';
import Signup from '../pages/Signup';
import SignupEmailStep from '../pages/Signup/SignupEmailStep';

const meta = {
  title: 'SignupEmailStep',
  component: SignupEmailStep,
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
