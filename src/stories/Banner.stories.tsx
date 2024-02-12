import React from "react";
import { Meta, StoryObj } from '@storybook/react';
import Banner from "../components/common/Banner";

const meta = {
  title: 'Common/Banner',
  component: Banner
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { };