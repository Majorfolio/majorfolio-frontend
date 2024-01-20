import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import BottomBar from '../components/common/BottomBar';

const meta = {
  title: 'Common/BottomBar',
  component: BottomBar
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { };