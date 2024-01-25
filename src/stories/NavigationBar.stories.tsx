import { Meta, StoryObj } from '@storybook/react';
import NavigationBar from '../components/common/NavigationBar';

const meta = {
  title: 'NavigationBar',
  component: NavigationBar,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllSchoolsOnHover: Story = {
  args: {
    iconOnHover: '모든 학교',
  },
};

export const MySchoolOnHover: Story = {
  args: {
    iconOnHover: '내 학교',
  },
};

export const MyDepartmentOnHover: Story = {
  args: {
    iconOnHover: '내 학과',
  },
};

export const MyClassOnHover: Story = {
  args: {
    iconOnHover: '내 수업',
  },
};
