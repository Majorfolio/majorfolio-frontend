import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Signin from '../pages/Signin';

const meta = {
  title: 'Pages/Signup/Signin',
  component: Signin,
  decorators: [
    (Story) => {
      return (
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      );
    },
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
};
