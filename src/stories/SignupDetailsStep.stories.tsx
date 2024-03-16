import { Meta, StoryObj } from '@storybook/react';
import SignupDetailsStep from '../pages/Signup/SignupDetailsStep';

const meta = {
  title: 'Pages/Signup/SignupDetailsStep',
  component: SignupDetailsStep,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onNext: () => {},
  },
};
