import React from "react";
import { Meta, StoryObj } from '@storybook/react';
import AllCheckbox from "../components/common/AllCheckbox";

const meta = {
  title: 'Common/AllCheckbox',
  component: AllCheckbox,
  argTypes: {
    checked: { control: 'boolean' }
  }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false
  },
};