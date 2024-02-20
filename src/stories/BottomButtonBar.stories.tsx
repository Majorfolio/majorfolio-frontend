import { Meta, StoryObj } from '@storybook/react';
import BottomButtonBar from '../components/common/BottomButtonBar';

const meta = {
  title: 'BottomButtonBar',
  component: BottomButtonBar,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Cart: Story = {
  args: {
    transitions: [
      { text: '장바구니 담기', onAction: () => {} },
      { text: '바로구매', onAction: () => {} },
    ],
  },
};
