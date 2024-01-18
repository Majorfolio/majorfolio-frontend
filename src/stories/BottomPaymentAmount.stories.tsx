import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import BottomPaymentAmount from '../components/home/BottomPaymentAmount';

const meta = {
  title: 'Home/BottomPaymentAmount',
  component: BottomPaymentAmount
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { };