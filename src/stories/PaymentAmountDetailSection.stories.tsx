import React from "react";
import { Meta, StoryObj } from '@storybook/react';
import PaymentAmountDetailSection from "../components/home/PaymentAmountDetailSection";

const meta = {
  title: 'Home/PaymentAmountDetailSection',
  component: PaymentAmountDetailSection
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { };