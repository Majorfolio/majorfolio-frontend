import { Meta, StoryObj } from '@storybook/react';
import React, { forwardRef, useRef } from 'react';

import { ModalCard } from '../components/common/Modal';

const meta = {
  title: 'Modal',
  component: ModalCard,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToBeUpdated: Story = {
  args: {
    type: 'TO_BE_UPDATED',
    onToggle: () => {},
  },
};
