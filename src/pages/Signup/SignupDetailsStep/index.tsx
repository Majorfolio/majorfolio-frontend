import React, { FormEvent } from 'react';
import { StyledTextContainer } from '../../../components/common/HelperText/index.styles';
import Text from '../../../components/common/Text';
import Dropdown from '../../../components/common/Dropdown';
import {
  StyledButtonContainer,
  StyledDropdownContainer,
} from '../SignupEmailStep/index.styles';
import Button from '../../../components/common/Button';

interface SignupDetailsStepPropsType {
  onNext: () => void;
}

const CATEGORIES = {
  SCHOOL_STR: '학교',
  ADMISSION_YEAR_STR: '학번',
  MAJOR_STR: '본 전공',
  MINOR_STR: '제2 전공(선택)',
};

const CATEGORY_OPTIONS = {
  SCHOOLS: ['건국대학교', '국민대학교'],
  ADMISSION_YEARS: [...Array(11)].map((_, index, array) =>
    index === array.length - 1 ? `${24 - index}학번 이상` : `${24 - index}학번`,
  ),
  DEPARTMENTS: ['국어국문학과', '컴퓨터공학부'],
};

export default function SignupDetailsStep({
  onNext,
}: SignupDetailsStepPropsType) {
  const handleSubmit = (event: FormEvent) => {};

  return (
    <form method="post" onSubmit={handleSubmit}>
      <StyledTextContainer>
        <Text as="div" size={22} lineHeight="lg">
          내가 다니는 학교의
        </Text>
        <Text as="div" size={22} weight="bold" lineHeight="lg">
          상세 정보를 입력해주세요
        </Text>
      </StyledTextContainer>
      <StyledDropdownContainer>
        <Dropdown
          category={CATEGORIES.SCHOOL_STR}
          options={CATEGORY_OPTIONS.SCHOOLS}
        />
        <Dropdown
          category={CATEGORIES.ADMISSION_YEAR_STR}
          options={CATEGORY_OPTIONS.ADMISSION_YEARS}
        />
        <Dropdown
          category={CATEGORIES.MAJOR_STR}
          options={CATEGORY_OPTIONS.DEPARTMENTS}
        />
        <Dropdown
          category={CATEGORIES.MINOR_STR}
          options={CATEGORY_OPTIONS.DEPARTMENTS}
        />
      </StyledDropdownContainer>
      <StyledButtonContainer>
        <Button backgroundColor="gray/gray100">
          <Text size={16} lineHeight="sm" weight="bold" color="gray/gray400">
            다음으로
          </Text>
        </Button>
      </StyledButtonContainer>
    </form>
  );
}
