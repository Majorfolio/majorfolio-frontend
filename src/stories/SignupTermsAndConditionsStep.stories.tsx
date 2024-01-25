import { Meta, StoryObj } from '@storybook/react';
import SignupTermsAndConditionsStep from '../pages/Signup/SignupTermsAndConditionsStep';

const meta = {
  title: 'SignupTermsAndConditionsStep',
  component: SignupTermsAndConditionsStep,
  tags: ['autotags'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
