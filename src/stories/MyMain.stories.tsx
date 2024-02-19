import { Meta, StoryObj } from '@storybook/react';
import MyMain from '../pages/My/MyMain';
import { EmailNotConfirmed } from './SignupEmailStep.stories';

const meta = {
  title: 'MyMain',
  component: MyMain,
  tags: ['autotags'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
