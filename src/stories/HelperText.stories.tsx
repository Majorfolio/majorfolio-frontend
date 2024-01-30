import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import HelperText from '../components/common/HelperText';

const meta = {
  title: 'HelperText',
  component: HelperText,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: (
      <>
        이미지 및 PDF가 아닌 자료의 경우, 무분별한 복사를 예방하고자 PDF파일로
        변환하여 업로드 됩니다.
      </>
    ),
  },
};
