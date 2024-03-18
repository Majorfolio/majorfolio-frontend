import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Transactions, {
  Category,
  TransactionCard,
} from '../pages/My/Transactions';

const meta = {
  title: 'Transactions',
  component: TransactionCard,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    category: 'beforePay',
    material: {
      id: 123,
      className: '언어와 사고',
      univ: '건국대학교',
      major: '컴퓨터공학부',
      price: 2300,
      updateAt: '2023-01-01',
      buyInfoId: 0,
      profileImage: '4',
    },
  },
};
