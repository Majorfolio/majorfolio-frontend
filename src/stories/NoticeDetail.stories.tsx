import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import NoticeDetail, { NoticeDetailById } from '../pages/My/NoticeDetail';

const meta = {
  title: 'Notice/NoticeDetail',
  component: NoticeDetailById,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
