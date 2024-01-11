import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import PaymentPostCard from '../components/home/PaymentPostCard/PaymentPostCard';

const meta = {
  title: 'Home/PaymentPostCard',
  component: PaymentPostCard
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { };