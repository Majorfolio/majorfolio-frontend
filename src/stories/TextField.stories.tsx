import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import TextField from '../components/common/TextField';
import theme from '../components/common/theme';
import Button from '../components/common/Button';
import Text from '../components/common/Text';

const meta = {
  title: 'TextField',
  component: TextField,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmailConfirmed: Story = {
  args: {
    id: 'email',
    type: 'email',
    borderColor: 'gray/gray100',
    borderColorOnHover: 'gray/gray150',
    borderColorOnFocus: 'main_color/blue_p',
    icon: (
      <Button type="submit" backgroundColor="main_color/blue_p">
        <Text color="gray/white" size={16} weight="bold" lineHeight="sm">
          다음으로
        </Text>
      </Button>
    ),
    placeholder: '이메일',
  },
};

export const EmailInProgress: Story = {
  args: {
    id: 'email',
    type: 'email',
    borderColor: 'gray/gray100',
    borderColorOnHover: 'gray/gray150',
    borderColorOnFocus: 'main_color/blue_p',
    icon: (
      <>
        <Button backgroundColor="sub_color/indigo/c">
          <Text
            color="main_color/blue_p"
            size={16}
            weight="bold"
            lineHeight="sm"
          >
            다음에 하기
          </Text>
        </Button>
        <Button backgroundColor="gray/gray100">
          <Text color="gray/gray400" size={16} weight="bold" lineHeight="sm">
            인증메일 전송
          </Text>
        </Button>
      </>
    ),
    placeholder: '이메일',
  },
};
