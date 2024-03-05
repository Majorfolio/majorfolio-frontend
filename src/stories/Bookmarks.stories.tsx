import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Bookmarks from '../pages/My/Bookmarks';

const meta = {
  title: 'Bookmarks',
  component: Bookmarks,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
