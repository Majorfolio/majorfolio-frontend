import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Tag from '../components/common/Tag';

const meta = {
  title: 'Tag',
  component: Tag,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    type: 'lg',
    children: <>본 전공 - 공업디자인학과</>,
    size: 12,
    weight: 'bold',
    lineHeight: 'sm',
    color: 'sub_color/indigo/p',
    backgroundColor: 'sub_color/indigo/c',
  },
};

export const Small: Story = {
  args: {
    type: 'sm',
    children: <>PDF</>,
    size: 10,
    weight: 'bold',
    lineHeight: 'sm',
    color: 'sub_color/indigo/p',
    backgroundColor: 'sub_color/indigo/c',
  },
};
