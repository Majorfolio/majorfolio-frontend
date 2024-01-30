import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import NavigationButton from '../components/common/NavigationButton';
import {
  AllSchoolsDefaultIcon,
  AllSchoolsFilledIcon,
  MyClassDefaultIcon,
  MyDepartmentDefaultIcon,
  MySchoolDefaultIcon,
} from '../assets/icons';
import Text from '../components/common/Text';

const meta = {
  title: 'NavigationButton',
  component: NavigationButton,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllSchools: Story = {
  args: {
    icon: <AllSchoolsDefaultIcon />,
    label: (
      <Text color="gray/gray500" size={12} lineHeight="sm">
        모든 학교
      </Text>
    ),
  },
};

export const AllSchoolsOnHover: Story = {
  args: {
    icon: <AllSchoolsFilledIcon />,
    label: (
      <Text color="main_color/blue_p" size={12} lineHeight="sm">
        모든 학교
      </Text>
    ),
    backgroundColor: 'main_color/blue_p',
  },
};

export const MySchool: Story = {
  args: {
    icon: <MySchoolDefaultIcon />,
    label: (
      <Text color="gray/gray500" size={12} lineHeight="sm">
        내 학교
      </Text>
    ),
  },
};

export const MyDepartment: Story = {
  args: {
    icon: <MyDepartmentDefaultIcon />,
    label: (
      <Text color="gray/gray500" size={12} lineHeight="sm">
        내 학과
      </Text>
    ),
  },
};

export const MyClass: Story = {
  args: {
    icon: <MyClassDefaultIcon />,
    label: (
      <Text color="gray/gray500" size={12} lineHeight="sm">
        내 수업
      </Text>
    ),
  },
};
