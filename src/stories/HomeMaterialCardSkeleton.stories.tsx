import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import HomeMaterialCardSkeleton from '../components/home/HomeMaterialCardSkeleton';

const meta = {
  title: 'Home/HomeMaterialCardSkeleton',
  component: HomeMaterialCardSkeleton
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { };