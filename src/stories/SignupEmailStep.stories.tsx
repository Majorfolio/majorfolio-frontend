import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Signup from '../pages/Signup';
import SignupEmailStep from '../pages/Signup/SignupEmailStep';

const meta = {
  title: 'SignupEmailStep',
  component: SignupEmailStep,
  decorators: [
    (Story) => {
      return (
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      );
    },
  ],
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmailNotConfirmed = {
  args: {
    isEmailConfirmed: false,
  },
};

export const EmailConfirmed = {
  args: {
    isEmailConfirmed: true,
  },
};
