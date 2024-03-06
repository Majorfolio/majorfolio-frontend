import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import NoticeDetail from '../pages/My/NoticeDetail';

const meta = {
  title: 'Notice/NoticeDetail',
  component: NoticeDetail,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
