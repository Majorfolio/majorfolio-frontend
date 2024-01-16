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

export const LargePrimary: Story = {
  args: {
    children: (
      <Text color="gray/white" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
    width: 'lg',
  },
};

export const LargeOnHover: Story = {
  args: {
    children: (
      <Text color="gray/white" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
    backgroundColor: 'main_color/blue_s',
    width: 'lg',
  },
};

export const LargeOutlined: Story = {
  args: {
    children: (
      <Text color="main_color/blue_p" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
    backgroundColor: 'gray/white',
    isOutlined: true,
    width: 'lg',
  },
};

export const LargeLoading: Story = {
  args: {
    children: <LoadingIcon />,
    width: 'lg',
  },
};

export const LargeDisabled: Story = {
  args: {
    children: (
      <Text color="gray/gray400" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
    backgroundColor: 'gray/gray100',
    width: 'lg',
  },
};

export const LargeSecondary: Story = {
  args: {
    children: (
      <Text color="main_color/blue_p" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
    backgroundColor: 'sub_color/indigo/c',
    width: 'lg',
  },
};

export const LargeSecondaryOnHover: Story = {
  args: {
    children: (
      <Text color="main_color/blue_p" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
    backgroundColor: 'sub_color/indigo/h',
    width: 'lg',
  },
};

export const MediumPrimary: Story = {
  args: {
    children: (
      <Text color="gray/white" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
    width: 'md',
  },
};

export const MediumOnHover: Story = {
  args: {
    children: (
      <Text color="gray/white" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
    backgroundColor: 'main_color/blue_s',
    width: 'md',
  },
};

export const MediumOutlined: Story = {
  args: {
    children: (
      <Text color="main_color/blue_p" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
    backgroundColor: 'gray/white',
    isOutlined: true,
    width: 'md',
  },
};

export const MediumLoading: Story = {
  args: {
    children: <LoadingIcon />,
    width: 'md',
  },
};

export const MediumDisabled: Story = {
  args: {
    children: (
      <Text color="gray/gray400" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
    backgroundColor: 'gray/gray100',
    width: 'md',
  },
};

export const MediumSecondary: Story = {
  args: {
    children: (
      <Text color="main_color/blue_p" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
    backgroundColor: 'sub_color/indigo/c',
    width: 'md',
  },
};

export const MediumSecondaryOnHover: Story = {
  args: {
    children: (
      <Text color="main_color/blue_p" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
    backgroundColor: 'sub_color/indigo/h',
    width: 'md',
  },
};

export const SmallPrimary: Story = {
  args: {
    children: (
      <Text color="gray/white" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
    width: 'sm',
  },
};

export const SmallOnHover: Story = {
  args: {
    children: (
      <Text color="gray/white" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
    backgroundColor: 'main_color/blue_s',
    width: 'sm',
  },
};

export const SmallOutlined: Story = {
  args: {
    children: (
      <Text color="main_color/blue_p" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
    backgroundColor: 'gray/white',
    isOutlined: true,
    width: 'sm',
  },
};

export const SmallLoading: Story = {
  args: {
    children: <LoadingIcon />,
    width: 'sm',
  },
};

export const SmallDisabled: Story = {
  args: {
    children: (
      <Text color="gray/gray400" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
    backgroundColor: 'gray/gray100',
    width: 'sm',
  },
};

export const SmallSecondary: Story = {
  args: {
    children: (
      <Text color="main_color/blue_p" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
    backgroundColor: 'sub_color/indigo/c',
    width: 'sm',
  },
};

export const SmallSecondaryOnHover: Story = {
  args: {
    children: (
      <Text color="main_color/blue_p" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
    backgroundColor: 'sub_color/indigo/h',
    width: 'sm',
  },
};

export const PopupPrimary: Story = {
  args: {
    children: (
      <Text color="gray/white" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
    width: 'popup',
  },
};

export const PopupOnHover: Story = {
  args: {
    children: (
      <Text color="gray/white" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
    backgroundColor: 'main_color/blue_s',
    width: 'popup',
  },
};

export const PopupOutlined: Story = {
  args: {
    children: (
      <Text color="main_color/blue_p" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
    backgroundColor: 'gray/white',
    isOutlined: true,
    width: 'popup',
  },
};

export const PopupLoading: Story = {
  args: {
    children: <LoadingIcon />,
    width: 'popup',
  },
};

export const PopupDisabled: Story = {
  args: {
    children: (
      <Text color="gray/gray400" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
    backgroundColor: 'gray/gray100',
    width: 'popup',
  },
};

export const PopupSecondary: Story = {
  args: {
    children: (
      <Text color="main_color/blue_p" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
    backgroundColor: 'sub_color/indigo/c',
    width: 'popup',
  },
};

export const PopupSecondaryOnHover: Story = {
  args: {
    children: (
      <Text color="main_color/blue_p" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
    backgroundColor: 'sub_color/indigo/h',
    width: 'popup',
  },
};
