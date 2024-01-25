import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MaterialDetailInfo from '../components/home/MaterialDetailInfo';

const meta = {
  title: 'Home/MaterialDetailInfo',
  component: MaterialDetailInfo
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { };