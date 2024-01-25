import React from "react";
import { Meta, StoryObj } from '@storybook/react';
import TapMenu from "../components/common/TapMenu";

const meta = {
  title: 'Common/TapMenu',
  component: TapMenu
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { };