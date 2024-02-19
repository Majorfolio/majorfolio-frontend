import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import Button from '../components/common/Button';
import Text from '../components/common/Text';
import { LoadingIcon } from '../assets/icons/index';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    children: (
      <Text color="main_color/blue_p" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
    category: 'outlined',
  },
};

export const Loading: Story = {
  args: {
    children: <LoadingIcon />,
  },
};

export const Disabled: Story = {
  args: {
    children: (
      <Text color="gray/gray400" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
    category: 'secondary',
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    children: (
      <Text color="main_color/blue_p" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
    category: 'secondary',
  },
};

export const Primary: Story = {
  args: {
    children: (
      <Text color="gray/white" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
    category: 'primary',
  },
};
