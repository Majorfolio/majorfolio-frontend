import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import MyViewMore from '../pages/My/MyViewMore';

const meta = {
  title: 'MyViewMore',
  component: MyViewMore,
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

export const Default = {
  args: {},
};
