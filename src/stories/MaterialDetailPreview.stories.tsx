import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MaterialDetailPreview from '../components/home/MaterialDetailPreview/MaterialDetailPreview';

const meta = {
  title: 'Home/MaterialDetailPreview',
  component: MaterialDetailPreview
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { };