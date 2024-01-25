import React from "react";
import { Meta, StoryObj } from '@storybook/react';
import PaymentCouponSection from "../components/home/PaymentCouponSection";

const meta = {
  title: 'Home/PaymentCouponSection',
  component: PaymentCouponSection
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { };