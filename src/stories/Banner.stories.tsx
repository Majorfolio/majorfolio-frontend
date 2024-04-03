import React from "react";
import { Meta, StoryObj } from '@storybook/react';
import Banner from "../components/common/Banner";
import theme from "../components/common/theme";

const meta = {
  title: 'Common/Banner',
  component: Banner,
  argTypes: {
    titleText: { control: 'text' },
    subtitleText: { control: 'text' },
    titleColor: { control: 'text' },
    subtitleColor: { control: 'text' },
    backgroundColor: { control: 'text' },
    bannerIcon: { control: 'text' },
    onClick: { control: 'text' },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    titleText: `어쩌구<br/>저쩌구`,
    subtitleText: '숄라숄라',
    titleColor: 'gray/white', 
    subtitleColor: 'gray/white', 
    backgroundColor: 'main_color/blue_p', 
  }
};