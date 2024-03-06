import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import NoticeList from '../pages/My/NoticeList';

const meta = {
  title: 'Notice/NoticeList',
  component: NoticeList,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
