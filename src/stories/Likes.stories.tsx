import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Likes from '../pages/My/Likes';

const meta = {
  title: 'Likes',
  component: Likes,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
