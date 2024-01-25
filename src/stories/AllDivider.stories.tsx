import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import AllDivider from '../components/common/AllDivider';

const meta = {
  title: 'Common/AllDivider',
  component: AllDivider,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { };