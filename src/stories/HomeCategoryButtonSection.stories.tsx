import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import HomeCategoryButtonSection from '../components/home/HomeCategoryButtonSection';

const meta = {
  title: 'Home/HomeCategoryButtonSection',
  component: HomeCategoryButtonSection
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { };