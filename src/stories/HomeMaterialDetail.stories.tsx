import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import HomeMaterialDetail from '../pages/HomeMaterialDetail';

const meta = {
  title: 'Pages/HomeMaterialDetail',
  component: HomeMaterialDetail,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { };