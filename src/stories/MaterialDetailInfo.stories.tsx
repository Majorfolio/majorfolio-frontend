import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MaterialDetailInfo from '../components/home/MaterialDetailInfo';

const meta = {
  title: 'Home/MaterialDetailInfo',
  component: MaterialDetailInfo,
  argTypes: {
    title: { control: 'text' },
    university: { control: 'text' },
    major: { control: 'text' },
    semester: { control: 'text' },
    subjectTitle: { control: 'text' },
    professor: { control: 'text' },
    grade: { control: 'text' },
    score: { control: 'number' },
    pages: { control: 'number' },
  }
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '[과제] ALIDEA',
    university: '국민대학교',
    major: '공업디자인학과',
    semester: '23-1',
    subjectTitle: '게임디자인과 기획',
    professor: '홍길동',
    grade: 'A+',
    score: 90,
    pages: 4,  
  },
};