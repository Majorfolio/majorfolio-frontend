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

export const GrayTag: Story = {
  args: {
    text: 'PDF',
    color: 'white',
  }
};
