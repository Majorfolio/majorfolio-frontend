import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import HomeTagCardTitle from '../components/home/HomeTagCardTitle';

const meta = {
  title: 'Home/HomeTagCardTitle',
  component: HomeTagCardTitle,
  argTypes: {
    title: { control: 'text' },
    tag: { control: 'text' },
    isViewAll: { control: 'boolean' },
  }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '최근에 본 자료',
  }
};

export const New: Story = {
  args: {
    title: '신규 등록 자료',
    tag: 'new',
    isViewAll: false,
  }
};

export const Hot: Story = {
  args: {
    title: '베스트 자료',
    tag: 'hot',
    isViewAll: false,
  }
};