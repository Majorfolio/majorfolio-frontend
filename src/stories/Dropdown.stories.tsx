import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import SearchableDropdown from '../components/common/Dropdown';

const meta = {
  title: 'Dropdown',
  component: SearchableDropdown,
  decorators: [
    (Story) => {
      const [searchQuery, setSearchQuery] = useState('');
      return (
        <Story searchQuery={searchQuery} onSearchQueryUpdate={setSearchQuery} />
      );
    },
  ],
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: ['건국대학교', '국민대학교'],
    category: '학교',
    searchQuery: '',
  },
};
