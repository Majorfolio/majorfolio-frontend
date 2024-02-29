import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ButtonIconWrapper,
  ButtonText,
  ButtonWrapper,
  CategoryButtonsWrapper,
  CustomRadioInput,
} from './index.styles';
import {
  AllSchoolsFilledIcon,
  AllSchoolsDefaultIcon,
  MySchoolFilledIcon,
  MySchoolDefaultIcon,
  MyDepartmentFilledIcon,
  MyDepartmentDefaultIcon,
  MyClassFilledIcon,
  MyClassDefaultIcon,
} from '../../../assets/icons';
import Text from '../../common/Text';
import HOME_CATEGORY from '../HomeCategory/index.types';
import useModal from '../../../hooks/common/useModal';
import useRequireAuth from '../../../hooks/common/useRequireAuth';
import Modal from '../../common/Modal';
import { Path } from '../../common/BottomBar';

interface HomeCategoryButtonSectionProps {
  currentCategory?: number;
  updateCategory: (newState: number) => void;
}

enum Category {
  AllSchool,
  MySchool,
  MyDepartment,
  MyClass,
}

function HomeCategoryButtonSection({
  currentCategory,
  updateCategory,
}: HomeCategoryButtonSectionProps) {
  const navigate = useNavigate();
  const {
    modalRef,
    category: modalCategory,
    activateModal,
    closePrimarily,
    closeSecondarily,
  } = useModal();
  const { isUserSignedin, hasUserVerifiedSchool } = useRequireAuth('member');

  const redirect = (category: Category) => {
    if (!isUserSignedin) {
      activateModal('REQUIRE_SIGNIN', {
        primaryAction: () => navigate(Path.Signin),
      });
    } else if (!hasUserVerifiedSchool) {
      activateModal('REQUIRE_SIGNUP', {
        primaryAction: () => navigate(Path.Signup),
      });
    } else {
      // 원하는 페이지로 이동
      updateCategory(category);
    }
  };

  return (
    <CategoryButtonsWrapper>
      <ButtonWrapper onClick={() => redirect(Category.AllSchool)}>
        <CustomRadioInput
          type="radio"
          id="allSchool"
          name="homeCategory"
          checked={currentCategory === Category.AllSchool}
          onChange={() => redirect(Category.AllSchool)}
        />
        <ButtonText>
          {currentCategory === Category.AllSchool ? (
            <Text
              lineHeight="sm"
              size={12}
              weight="bold"
              color="main_color/blue_p"
            >
              모든 학교
            </Text>
          ) : (
            <Text lineHeight="sm" size={12} color="gray/gray500">
              모든 학교
            </Text>
          )}
        </ButtonText>
        <ButtonIconWrapper htmlFor="allSchool">
          {currentCategory === Category.AllSchool ? (
            <AllSchoolsFilledIcon />
          ) : (
            <AllSchoolsDefaultIcon />
          )}
        </ButtonIconWrapper>
      </ButtonWrapper>

      <ButtonWrapper onClick={() => redirect(Category.MySchool)}>
        <CustomRadioInput
          type="radio"
          id="mySchool"
          name="homeCategory"
          checked={currentCategory === Category.MySchool}
          onChange={() => redirect(Category.MySchool)}
        />
        <ButtonText>
          {currentCategory === Category.MySchool ? (
            <Text
              lineHeight="sm"
              size={12}
              weight="bold"
              color="main_color/blue_p"
            >
              내 학교
            </Text>
          ) : (
            <Text lineHeight="sm" size={12} color="gray/gray500">
              내 학교
            </Text>
          )}
        </ButtonText>
        <ButtonIconWrapper htmlFor="mySchool">
          {currentCategory === Category.MySchool ? (
            <MySchoolFilledIcon />
          ) : (
            <MySchoolDefaultIcon />
          )}
        </ButtonIconWrapper>
      </ButtonWrapper>

      <ButtonWrapper onClick={() => redirect(Category.MyDepartment)}>
        <CustomRadioInput
          type="radio"
          id="myDepartment"
          name="homeCategory"
          checked={currentCategory === Category.MyDepartment}
          onChange={() => redirect(2)}
        />
        <ButtonText>
          {currentCategory === Category.MyDepartment ? (
            <Text
              lineHeight="sm"
              size={12}
              weight="bold"
              color="main_color/blue_p"
            >
              내 학과
            </Text>
          ) : (
            <Text lineHeight="sm" size={12} color="gray/gray500">
              내 학과
            </Text>
          )}
        </ButtonText>
        <ButtonIconWrapper htmlFor="myDepartment">
          {currentCategory === Category.MyDepartment ? (
            <MyDepartmentFilledIcon />
          ) : (
            <MyDepartmentDefaultIcon />
          )}
        </ButtonIconWrapper>
      </ButtonWrapper>

      <ButtonWrapper onClick={() => redirect(Category.MyClass)}>
        <CustomRadioInput
          type="radio"
          id="myClass"
          name="homeCategory"
          checked={currentCategory === Category.MyClass}
          onChange={() => redirect(Category.MyClass)}
        />
        <ButtonText>
          {currentCategory === Category.MyClass ? (
            <Text
              lineHeight="sm"
              size={12}
              weight="bold"
              color="main_color/blue_p"
            >
              내 수업
            </Text>
          ) : (
            <Text lineHeight="sm" size={12} color="gray/gray500">
              내 수업
            </Text>
          )}
        </ButtonText>
        <ButtonIconWrapper htmlFor="myClass">
          {currentCategory === Category.MyClass ? (
            <MyClassFilledIcon />
          ) : (
            <MyClassDefaultIcon />
          )}
        </ButtonIconWrapper>
      </ButtonWrapper>
      <Modal
        category={modalCategory}
        modalRef={modalRef}
        onPrimaryAction={closePrimarily}
        onSecondaryAction={closeSecondarily}
      />
    </CategoryButtonsWrapper>
  );
}

export default HomeCategoryButtonSection;
