import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import AllTagSmall from '../components/common/AllTagSmall';

const meta = {
  title: 'Common/AllTagSmall',
  component: AllTagSmall,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'text' },
  }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'PDF',
  }
};

export const Dark: Story = {
  args: {
    text: 'PDF',
    color: 'dark',
  }
};

export const Red: Story = {
  args: {
    text: 'PDF',
    color: 'red',
  }
};

export const Yellow: Story = {
  args: {
    text: 'PDF',
    color: 'yellow',
  }
};

export const Green: Story = {
  args: {
    text: 'PDF',
    color: 'green',
  }
};

export const Blue: Story = {
  args: {
    text: 'PDF',
    color: 'blue',
  }
};