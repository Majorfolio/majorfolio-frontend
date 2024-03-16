import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MaterialSellerProfile from '../components/home/MaterialSellerProfile';

const meta = {
  title: 'Home/MaterialSellerProfile',
  component: MaterialSellerProfile,
  argTypes: {
    id: { control: 'number' },
    nickName: { control: 'text' },
    hasReaction: { control: 'boolean' },
    infoContent: { control: 'text' },
    infoName: { control: 'text' },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const HasReactionFalse: Story = {
  args: {
    nickName: '사용자 1',
    hasReaction: false,
  },
};

export const HasReactionTrue: Story = {
  args: {
    nickName: '사용자 2',
    hasReaction: true,
  },
};

export const HasInfo: Story = {
  args: {
    nickName: '사용자 3',
    hasReaction: false,
    infoContent: '2023. 11. 15',
    infoName: '판매',
  },
};
