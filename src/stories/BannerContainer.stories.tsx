import React from "react";
import { Meta, StoryObj } from '@storybook/react';
import BannerContainer from "../components/common/BannerContainer";

const meta = {
  title: 'Common/BannerContainer',
  component: BannerContainer,
  argTypes: {
    children: { controle: 'banner' },
  }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '배너',
  },
};