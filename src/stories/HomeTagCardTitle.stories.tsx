import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import HomeTagCardTitle from '../components/home/HomeTagCardTitle';

const meta = {
  title: 'Home/HomeTagCardTitle',
  component: HomeTagCardTitle,
  argTypes: {
    tag: { control: 'text' },
  }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { };

export const New: Story = {
  args: {
    tag: 'new',
  }
};

export const Hot: Story = {
  args: {
    tag: 'hot',
  }
};