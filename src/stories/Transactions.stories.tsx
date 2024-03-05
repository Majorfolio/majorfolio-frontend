import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Transactions from '../pages/My/Transactions';

const meta = {
  title: 'Transactions',
  component: Transactions,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
