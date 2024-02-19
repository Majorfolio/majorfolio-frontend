import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import TextField from '../components/common/TextField';
import theme from '../components/common/theme';
import Button from '../components/common/Button';
import Text from '../components/common/Text';
import useEmail from '../pages/Signup/SignupEmailStep/useEmail';

const meta = {
  title: 'TextField',
  component: TextField,
  decorators: [
    (Story) => {
      const { email, onEmailChange } = useEmail();
      return <Story text={email} onTextChange={onEmailChange} />;
    },
  ],
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmailConfirmed: Story = {
  args: {
    id: 'email',
    type: 'email',

    icon: (
      <Button type="submit" category="primary">
        <Text color="gray/white" size={16} weight="bold" lineHeight="sm">
          다음으로
        </Text>
      </Button>
    ),
    placeholder: '이메일',
    text: '',
    onTextChange: () => {},
  },
};

export const EmailInProgress: Story = {
  args: {
    id: 'email',
    type: 'email',
    icon: (
      <>
        <Button category="secondary">
          <Text
            color="main_color/blue_p"
            size={16}
            weight="bold"
            lineHeight="sm"
          >
            다음에 하기
          </Text>
        </Button>
        <Button category="primary" disabled>
          <Text color="gray/gray400" size={16} weight="bold" lineHeight="sm">
            인증메일 전송
          </Text>
        </Button>
      </>
    ),
    placeholder: '이메일',
    text: '',
    onTextChange: () => {},
  },
};
