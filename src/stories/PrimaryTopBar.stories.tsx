import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { PrimaryTopbar } from '../components/common/TopBar';
import {
  AppLogoIcon,
  CartDefaultIcon,
  NotificationDefaultIcon,
} from '../assets/icons';

const meta = {
  title: 'PrimaryTopBar',
  component: PrimaryTopbar,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;
export const Logo: Story = {
  args: {
    title: <AppLogoIcon />,
    icons: [<CartDefaultIcon />, <NotificationDefaultIcon />],
  },
};
