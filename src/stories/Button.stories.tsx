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
  },
};

export const LargeLoading: Story = {
  args: {
    children: <LoadingIcon />,
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
  },
};

export const MediumPrimary: Story = {
  args: {
    children: (
      <Text color="gray/white" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
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
  },
};

export const MediumLoading: Story = {
  args: {
    children: <LoadingIcon />,
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
  },
};

export const SmallPrimary: Story = {
  args: {
    children: (
      <Text color="gray/white" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
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
  },
};

export const SmallLoading: Story = {
  args: {
    children: <LoadingIcon />,
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
  },
};

export const PopupPrimary: Story = {
  args: {
    children: (
      <Text color="gray/white" weight="bold" size={16} lineHeight="sm">
        버튼
      </Text>
    ),
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
  },
};

export const PopupLoading: Story = {
  args: {
    children: <LoadingIcon />,
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
  },
};
