import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MaterialPostStatisticsNumber from '../components/home/MaterialPostStatisticsNumber';

const meta = {
  title: 'Home/MaterialPostStatisticsNumber',
  component: MaterialPostStatisticsNumber,
  argTypes: {
    sell: { control: 'number' },
    follower: { control: 'number' },
    reaction: { control: 'number' },
  }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { 
  args: {
    sell: 90,
    follower: 100,
    reaction: 120,
  }
};