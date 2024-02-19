import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Textbox from '../components/common/Textbox';
import useText from '../hooks/common/useText';

const meta = {
  title: 'Textbox',
  component: Textbox,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: '과제',
    text: '',
    onTextChange: () => {},
  },
  render: (args) => {
    const { title, onTitleChange } = useText('title');

    return <Textbox {...args} text={title} onTextChange={onTitleChange} />;
  },
};
