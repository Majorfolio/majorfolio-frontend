import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MaterialSellerProfile from '../components/home/MaterialSellerProfile';

const meta = {
  title: 'Home/MaterialSellerProfile',
  component: MaterialSellerProfile,
  argTypes: {
    hasReaction: { control: 'boolean' },
  }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const HasReactionFalse: Story = { 
  args: {
    hasReaction: false,
  }
};

export const HasReactionTrue: Story = { 
  args: {
    hasReaction: true,
  }
};