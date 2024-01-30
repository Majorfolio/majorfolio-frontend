import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import HomeViewAll from '../pages/HomeViewAll';

const meta = {
  title: 'Pages/HomeViewAll',
  component: HomeViewAll,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { };