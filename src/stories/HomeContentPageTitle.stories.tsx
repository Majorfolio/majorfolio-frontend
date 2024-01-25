import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import HomeContentPageTitle from '../components/home/HomeContentPageTitle';

const meta = {
  title: 'Home/HomeContentPageTitle',
  component: HomeContentPageTitle
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { };