import React from "react";
import { Meta, StoryObj } from '@storybook/react';
import PaymentSelectAllBar from "../components/home/PaymentSelectAllBar";

const meta = {
  title: 'Home/PaymentSelectAllBar',
  component: PaymentSelectAllBar
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { };