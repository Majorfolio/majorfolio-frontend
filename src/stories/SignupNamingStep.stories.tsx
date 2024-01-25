import { Meta, StoryObj } from '@storybook/react';
import SignupNamingStep from '../pages/Signup/SignupNamingStep';

const meta = {
  title: 'SignupNamingStep',
  component: SignupNamingStep,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
