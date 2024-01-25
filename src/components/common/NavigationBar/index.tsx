import React from 'react';
import {
  AllSchoolsDefaultIcon,
  AllSchoolsFilledIcon,
  MyClassDefaultIcon,
  MyClassFilledIcon,
  MyDepartmentDefaultIcon,
  MyDepartmentFilledIcon,
  MySchoolDefaultIcon,
  MySchoolFilledIcon,
} from '../../../assets/icons';
import { StyledNavigationItem, StyledNavigationBar } from './index.styles';
import NavigationButton from '../NavigationButton';

interface NavigationBarPropsType {
  iconOnHover?: '모든 학교' | '내 학교' | '내 학과' | '내 수업' | false;
}

const ICONS = {
  ALL_SCHOOLS: '모든 학교',
  MY_SCHOOL: '내 학교',
  MY_DEPARTMENT: '내 학과',
  MY_CLASS: '내 수업',
};

export default function NavigationBar({
  iconOnHover = false,
}: NavigationBarPropsType) {
  const icons = [
    iconOnHover === ICONS.ALL_SCHOOLS ? (
      <AllSchoolsFilledIcon />
    ) : (
      <AllSchoolsDefaultIcon />
    ),
    iconOnHover === ICONS.MY_SCHOOL ? (
      <MySchoolFilledIcon />
    ) : (
      <MySchoolDefaultIcon />
    ),
    iconOnHover === ICONS.MY_DEPARTMENT ? (
      <MyDepartmentFilledIcon />
    ) : (
      <MyDepartmentDefaultIcon />
    ),
    iconOnHover === ICONS.MY_CLASS ? (
      <MyClassFilledIcon />
    ) : (
      <MyClassDefaultIcon />
    ),
  ];
  const labels = ['모든 학교', '내 학교', '내 학과', '내 수업'];

  const items = icons.map((icon, index) => (
    <StyledNavigationItem key={labels[index]}>
      {labels[index] === iconOnHover ? (
        <NavigationButton
          icon={icon}
          label={labels[index]}
          backgroundColor="main_color/blue_p"
        />
      ) : (
        <NavigationButton icon={icon} label={labels[index]} />
      )}
    </StyledNavigationItem>
  ));

  return <StyledNavigationBar>{items}</StyledNavigationBar>;
}
