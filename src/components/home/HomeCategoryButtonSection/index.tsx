import React, { useState } from 'react'

import * as S from './index.styles';
import { AllSchoolsOutinedIcon, AllSchoolsDefaultIcon, MySchoolFilledIcon, MySchoolDefaultIcon, MyDepartmentFilledIcon, MyDepartmentDefaultIcon, MyClassFilledIcon, MyClassDefaultIcon } from '../../../assets/icons';

const HomeCategoryButtonSection = () => {
  const [currentCategory, setCurrentCategory] = useState(-1);

  const handleButtonClick = (category: number) => {
    setCurrentCategory(category);
  }

  return (
    <S.CategoryButtonsWrapper>
      <S.ButtonWrapper onClick={() => handleButtonClick(0)}>
        <S.CustomRadioInput
          type='radio'
          id='allSchool'
          name='homeCategory'
          checked={currentCategory === 0}
          onChange={() => handleButtonClick(0)}
        />
        <S.ButtonText>
          모든 학교
        </S.ButtonText>
        <S.ButtonIconWrapper htmlFor='allSchool'>
          {currentCategory === 0 ? <AllSchoolsOutinedIcon /> : <AllSchoolsDefaultIcon />}
        </S.ButtonIconWrapper>
      </S.ButtonWrapper>

      <S.ButtonWrapper onClick={() => handleButtonClick(1)}>
        <S.CustomRadioInput
          type='radio'
          id='mySchool'
          name='homeCategory'
          checked={currentCategory === 1}
          onChange={() => handleButtonClick(1)}
        />
        <S.ButtonText>
          내 학교
        </S.ButtonText>
        <S.ButtonIconWrapper htmlFor='mySchool'>
          {currentCategory === 1 ? <MySchoolFilledIcon /> : <MySchoolDefaultIcon />}
        </S.ButtonIconWrapper>
      </S.ButtonWrapper>

      <S.ButtonWrapper onClick={() => handleButtonClick(2)}>
        <S.CustomRadioInput
          type='radio'
          id='myDepartment'
          name='homeCategory'
          checked={currentCategory === 2}
          onChange={() => handleButtonClick(2)}
        />
        <S.ButtonText>
          내 학과
        </S.ButtonText>
        <S.ButtonIconWrapper htmlFor='myDepartment'>
          {currentCategory === 2 ? <MyDepartmentFilledIcon /> : <MyDepartmentDefaultIcon />}
        </S.ButtonIconWrapper>
      </S.ButtonWrapper>

      <S.ButtonWrapper onClick={() => handleButtonClick(3)}>
        <S.CustomRadioInput
          type='radio'
          id='myClass'
          name='homeCategory'
          checked={currentCategory === 3}
          onChange={() => handleButtonClick(3)}
        />
        <S.ButtonText>
          내 수업
        </S.ButtonText>
        <S.ButtonIconWrapper htmlFor='myClass'>
          {currentCategory === 3 ? <MyClassFilledIcon /> : <MyClassDefaultIcon />}
        </S.ButtonIconWrapper>
      </S.ButtonWrapper>
    </S.CategoryButtonsWrapper>
  )
}

export default HomeCategoryButtonSection