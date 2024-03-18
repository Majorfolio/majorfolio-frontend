import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import HomeMaterialCard from '../components/home/HomeMaterialCard';

const meta = {
  title: 'Home/HomeMaterialCard',
  component: HomeMaterialCard,
  argTypes: {
    isBig: { control: 'boolean' },
    id: { control: 'number' },
    memberId: { control: 'number' },
    profileImage: { control: 'text' },
    nickName: { control: 'text' },
    univ: { control: 'text' },
    major: { control: 'text' },
    semester: { control: 'text' },
    professor: { control: 'text' },
    like: { control: 'number' },
    header: { control: 'ReactNode' },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isBig: true,
    id: 1,
    memberId: 1,
    profileImage: 'null',
    nickName: '엘사네올라프',
    className: '게임 디자인과 기획',
    univ: '건국대학교',
    major: '컴퓨터공학부',
    semester: '23-1',
    professor: '홍길동',
    like: 5,
    header: '프로필',
  },
};

export const SmallCard: Story = {
  args: {
    isBig: false,
    id: 1,
    memberId: 1,
    profileImage: 'null',
    nickName: '엘사네올라프',
    className: '게임 디자인과 기획',
    univ: '건국대학교',
    major: '컴퓨터공학부',
    semester: '23-1',
    professor: '홍길동',
    like: 5,
    header: '프로필',
  },
};
