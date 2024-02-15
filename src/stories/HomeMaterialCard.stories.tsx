import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import HomeMaterialCard from '../components/home/HomeMaterialCard';

const meta = {
  title: 'Home/HomeMaterialCard',
  component: HomeMaterialCard,
  argTypes: {
    isBig: { control: 'boolean' },
    id: { control: 'number' },
    nickname: { control: 'text' },
    univ: { control: 'text' },
    major: { control: 'text' },
    semester: { control: 'text' },
    professor: { control: 'text' },
    like: { control: 'number' },
  }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isBig: true,
    id: 1,
    nickname: "엘사네올라프",
    className: "게임 디자인과 기획",
    univ: "건국대학교",
    major: "컴퓨터공학부",
    semester: "23-1",
    professor: "홍길동",
    like : 5,
  }
};

export const SmallCard: Story = {
  args: {
    isBig: false,
    id: 1,
    nickname: "엘사네올라프",
    className: "게임 디자인과 기획",
    univ: "건국대학교",
    major: "컴퓨터공학부",
    semester: "23-1",
    professor: "홍길동",
    like : 5
  }
};