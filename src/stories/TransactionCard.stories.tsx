import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Transactions, { TransactionCard } from '../pages/My/Transactions';

const meta = {
  title: 'My/Transaction/TransactionCard',
  component: TransactionCard,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    category: 'beforePay',
    material: {
      id: 123,
      className: 'C프로그래밍',
      univ: '건국대학교',
      major: '컴퓨터공학부',
      price: 4700,
      updateAt: '2023-01-01',
    },
  },
};
