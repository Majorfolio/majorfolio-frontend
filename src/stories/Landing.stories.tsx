import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import Landing from '../pages/Landing/Landing';

const meta = {
  title: 'Pages/Landing',
  component: Landing,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { };