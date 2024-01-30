import React, { useState } from 'react'

import { ButtonIconWrapper, ButtonText, ButtonWrapper, CategoryButtonsWrapper, CustomRadioInput } from './index.styles';
import { 
  AllSchoolsOutinedIcon, 
  AllSchoolsDefaultIcon, 
  MySchoolFilledIcon, 
  MySchoolDefaultIcon, 
  MyDepartmentFilledIcon, 
  MyDepartmentDefaultIcon, 
  MyClassFilledIcon, 
  MyClassDefaultIcon 
} from '../../../assets/icons';
import Text from '../../common/Text';

function HomeCategoryButtonSection() {
  const [currentCategory, setCurrentCategory] = useState(1);

  const handleButtonClick = (category: number) => {
    setCurrentCategory(category);
  }

  return (
    <CategoryButtonsWrapper>
      <ButtonWrapper onClick={() => handleButtonClick(0)}>
        <CustomRadioInput
          type='radio'
          id='allSchool'
          name='homeCategory'
          checked={currentCategory === 0}
          onChange={() => handleButtonClick(0)}
        />
        <ButtonText>
          {currentCategory === 0 
            ? (
              <Text lineHeight='sm' size={12} weight='bold' color='main_color/blue_p'>
                모든 학교
              </Text>
            ) 
            : (
              <Text lineHeight='sm' size={12} color='gray/gray500'>
                모든 학교
            </Text>
            )
          }
        </ButtonText>
        <ButtonIconWrapper htmlFor='allSchool'>
          {currentCategory === 0 ? <AllSchoolsOutinedIcon /> : <AllSchoolsDefaultIcon />}
        </ButtonIconWrapper>
      </ButtonWrapper>

      <ButtonWrapper onClick={() => handleButtonClick(1)}>
        <CustomRadioInput
          type='radio'
          id='mySchool'
          name='homeCategory'
          checked={currentCategory === 1}
          onChange={() => handleButtonClick(1)}
        />
        <ButtonText>
          {currentCategory === 1
            ? (
              <Text lineHeight='sm' size={12} weight='bold' color='main_color/blue_p'>
                내 학교
              </Text>
            ) 
            : (
              <Text lineHeight='sm' size={12} color='gray/gray500'>
                내 학교
            </Text>
            )
          }
        </ButtonText>
        <ButtonIconWrapper htmlFor='mySchool'>
          {currentCategory === 1 ? <MySchoolFilledIcon /> : <MySchoolDefaultIcon />}
        </ButtonIconWrapper>
      </ButtonWrapper>

      <ButtonWrapper onClick={() => handleButtonClick(2)}>
        <CustomRadioInput
          type='radio'
          id='myDepartment'
          name='homeCategory'
          checked={currentCategory === 2}
          onChange={() => handleButtonClick(2)}
        />
        <ButtonText>
          {currentCategory === 2
            ? (
              <Text lineHeight='sm' size={12} weight='bold' color='main_color/blue_p'>
                내 학과
              </Text>
            ) 
            : (
              <Text lineHeight='sm' size={12} color='gray/gray500'>
                내 학과
            </Text>
            )
          }
        </ButtonText>
        <ButtonIconWrapper htmlFor='myDepartment'>
          {currentCategory === 2 ? <MyDepartmentFilledIcon /> : <MyDepartmentDefaultIcon />}
        </ButtonIconWrapper>
      </ButtonWrapper>

      <ButtonWrapper onClick={() => handleButtonClick(3)}>
        <CustomRadioInput
          type='radio'
          id='myClass'
          name='homeCategory'
          checked={currentCategory === 3}
          onChange={() => handleButtonClick(3)}
        />
        <ButtonText>
          {currentCategory === 3
            ? (
              <Text lineHeight='sm' size={12} weight='bold' color='main_color/blue_p'>
                내 수업
              </Text>
            ) 
            : (
              <Text lineHeight='sm' size={12} color='gray/gray500'>
                내 수업
            </Text>
            )
          }
        </ButtonText>
        <ButtonIconWrapper htmlFor='myClass'>
          {currentCategory === 3 ? <MyClassFilledIcon /> : <MyClassDefaultIcon />}
        </ButtonIconWrapper>
      </ButtonWrapper>
    </CategoryButtonsWrapper>
  )
}

export default HomeCategoryButtonSection