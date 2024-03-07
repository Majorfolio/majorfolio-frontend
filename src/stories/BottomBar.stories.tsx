import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import BottomBar, { Path } from '../components/common/BottomBar';

const meta = {
  title: 'Common/BottomBar',
  component: BottomBar,
  argTypes: {
    currentPath: { control: 'text' },
  },
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>]
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentPath: Path.Home,
  }
};