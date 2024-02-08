import { Meta, StoryObj } from '@storybook/react';
import Signin from '../pages/Signin';

const meta = {
  title: 'Signin',
  component: Signin,
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {},
};
