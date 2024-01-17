import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import HomeMaterialCard from '../components/home/HomeMaterialCard';

const meta = {
  title: 'Home/HomeMaterialCard',
  component: HomeMaterialCard,
  argTypes: {
    isBig: { control: 'boolean' },
  }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isBig: true,
  }
};

export const SmallCard: Story = {
  args: {
    isBig: false,
  }
};