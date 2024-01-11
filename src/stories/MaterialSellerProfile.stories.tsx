import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MaterialSellerProfile from '../components/home/MaterialSellerProfile';

const meta = {
  title: 'Home/MaterialSellerProfile',
  component: MaterialSellerProfile
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { };