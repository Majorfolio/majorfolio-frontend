import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Cart from '../pages/Cart';

const meta = {
  title: 'Pages/Cart',
  component: Cart,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { };