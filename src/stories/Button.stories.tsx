import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from '../components/common/Button';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
