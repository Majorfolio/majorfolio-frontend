import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import PaymentPostCard from '../components/home/PaymentPostCard';

const meta = {
  title: 'Home/PaymentPostCard',
  component: PaymentPostCard,
  argTypes: {
    isCart: { control : 'boolean' },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isCart: false,
  }
};