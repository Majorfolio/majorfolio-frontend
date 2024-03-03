import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import DeleteAccount from '../pages/My/DeleteAccount';

const meta = {
  title: 'DeleteAccount',
  component: DeleteAccount,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
