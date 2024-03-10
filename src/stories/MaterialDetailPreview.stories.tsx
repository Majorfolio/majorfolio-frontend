import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MaterialDetailPreview from '../components/home/MaterialDetailPreview';

const meta = {
  title: 'Home/MaterialDetailPreview',
  component: MaterialDetailPreview,
  argTypes: {
    image: { control: 'image' },
    materialId: { control: 'number' },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: 'http://placehold.co/400',
    materialId: 0,
  }
};