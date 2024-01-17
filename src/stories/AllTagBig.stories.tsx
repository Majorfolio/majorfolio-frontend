import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import AllTagBig from '../components/common/AllTagBig';

const meta = {
  title: 'Common/AllTagBig',
  component: AllTagBig,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'text' },
  }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '본 전공 - 컴퓨터공학부',
  }
};

export const Dark: Story = {
  args: {
    text: '본 전공 - 컴퓨터공학부',
    color: 'dark',
  }
};

export const Red: Story = {
  args: {
    text: '본 전공 - 컴퓨터공학부',
    color: 'red',
  }
};

export const Yellow: Story = {
  args: {
    text: '본 전공 - 컴퓨터공학부',
    color: 'yellow',
  }
};

export const Green: Story = {
  args: {
    text: '본 전공 - 컴퓨터공학부',
    color: 'green',
  }
};

export const Blue: Story = {
  args: {
    text: '본 전공 - 컴퓨터공학부',
    color: 'blue',
  }
};