import React from "react";
import { Meta, StoryObj } from '@storybook/react';
import AllDividerThin from "../components/common/AllDividerThin";

const meta = {
  title: 'Common/AllDividerThin',
  component: AllDividerThin
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { };