import React, { FormEvent, useState } from 'react';
import { StyledTextContainer } from '../../../components/common/HelperText/index.styles';
import Text from '../../../components/common/Text';
import Dropdown from '../../../components/common/Dropdown';
import {
  StyledButtonContainer,
  StyledDropdownContainer,
} from '../SignupEmailStep/index.styles';
import Button from '../../../components/common/Button';
import { HelperCancelIcon } from '../../../assets/icons';
import useSearchQueries from './useSearchQueries.tsx';
import StyledButton from './index.styles';
import userStore from '../../../store/userStore';

interface SignupDetailsStepPropsType {
  onNext: () => void;
}

enum CATEGORIES {
  SCHOOL_STR = '학교',
  ADMISSION_YEAR_STR = '학번',
  MAJOR_STR = '본 전공',
  MINOR_STR = '제2 전공(선택)',
}

interface FormElements extends HTMLFormControlsCollection {
  [CATEGORIES.SCHOOL_STR]: HTMLInputElement;
  [CATEGORIES.ADMISSION_YEAR_STR]: HTMLInputElement;
  [CATEGORIES.MAJOR_STR]: HTMLInputElement;
  [CATEGORIES.MINOR_STR]: HTMLInputElement;
}

interface UserDetailsFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

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
  const {
    school,
    admissionYear,
    major,
    minor,
    createSearchQueryUpdater,
    isRequiredFieldEmpty,
  } = useSearchQueries();

  const { updateDetails } = userStore();

  const [areFieldsValid, setAreFieldsValid] = useState<{
    school: boolean;
    admissionYear: boolean;
    major: boolean;
    minor: boolean;
  }>({
    school: true,
    admissionYear: true,
    major: true,
    minor: true,
  });

  const [previousFields, setPreviousFields] = useState<{
    school: string;
    admissionYear: string;
    major: string;
    minor: string;
  }>({
    school: '',
    admissionYear: '',
    major: '',
    minor: '',
  });

  const handleSubmit = (event: FormEvent<UserDetailsFormElement>) => {
    event.preventDefault();
    const userDetails = event.currentTarget.elements;
    // const [school, admissionYear, major, minor] = [
    //   userDetails[CATEGORIES.SCHOOL_STR].value,
    //   userDetails[CATEGORIES.ADMISSION_YEAR_STR].value,
    //   userDetails[CATEGORIES.MAJOR_STR].value,
    //   userDetails[CATEGORIES.MINOR_STR].value,
    // ];

    setAreFieldsValid({
      school: CATEGORY_OPTIONS.SCHOOLS.some(
        (schoolOption) => school === schoolOption,
      ),
      admissionYear: CATEGORY_OPTIONS.ADMISSION_YEARS.some(
        (admissionYearOption) => admissionYearOption === admissionYear,
      ),
      major: CATEGORY_OPTIONS.DEPARTMENTS.some(
        (departmentOption) => departmentOption === major,
      ),
      minor:
        !minor ||
        minor !== major ||
        CATEGORY_OPTIONS.DEPARTMENTS.some(
          (departmentOption) => departmentOption === minor,
        ),
    });

    updateDetails({
      universityName: school,
      studentId: Number(admissionYear.slice(0, 2)),
      major1: major,
      major2: minor,
    });
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
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
          borderColor={areFieldsValid.school ? undefined : 'error/error_color'}
          borderColorOnFocus={
            areFieldsValid.school ? undefined : 'error/error_color'
          }
          icon={areFieldsValid.school ? undefined : <HelperCancelIcon />}
          onFocus={() =>
            setAreFieldsValid((previousAreFieldsValid) => ({
              ...previousAreFieldsValid,
              school: true,
            }))
          }
          searchQuery={school}
          onSearchQueryUpdate={createSearchQueryUpdater('school')}
        />
        <Dropdown
          category={CATEGORIES.ADMISSION_YEAR_STR}
          options={CATEGORY_OPTIONS.ADMISSION_YEARS}
          borderColor={
            areFieldsValid.admissionYear ? undefined : 'error/error_color'
          }
          borderColorOnFocus={
            areFieldsValid.admissionYear ? undefined : 'error/error_color'
          }
          icon={areFieldsValid.admissionYear ? undefined : <HelperCancelIcon />}
          onFocus={() =>
            setAreFieldsValid((previousAreFieldsValid) => ({
              ...previousAreFieldsValid,
              admissionYear: true,
            }))
          }
          searchQuery={admissionYear}
          onSearchQueryUpdate={createSearchQueryUpdater('admissionYear')}
        />
        <Dropdown
          category={CATEGORIES.MAJOR_STR}
          options={CATEGORY_OPTIONS.DEPARTMENTS}
          borderColor={areFieldsValid.major ? undefined : 'error/error_color'}
          borderColorOnFocus={
            areFieldsValid.major ? undefined : 'error/error_color'
          }
          icon={areFieldsValid.major ? undefined : <HelperCancelIcon />}
          onFocus={() =>
            setAreFieldsValid((previousAreFieldsValid) => ({
              ...previousAreFieldsValid,
              major: true,
            }))
          }
          searchQuery={major}
          onSearchQueryUpdate={createSearchQueryUpdater('major')}
        />
        <Dropdown
          category={CATEGORIES.MINOR_STR}
          options={CATEGORY_OPTIONS.DEPARTMENTS}
          borderColor={areFieldsValid.minor ? undefined : 'error/error_color'}
          borderColorOnFocus={
            areFieldsValid.minor ? undefined : 'error/error_color'
          }
          icon={areFieldsValid.minor ? undefined : <HelperCancelIcon />}
          onFocus={() =>
            setAreFieldsValid((previousAreFieldsValid) => ({
              ...previousAreFieldsValid,
              minor: true,
            }))
          }
          searchQuery={minor}
          onSearchQueryUpdate={createSearchQueryUpdater('minor')}
        />
      </StyledDropdownContainer>
      <StyledButtonContainer>
        <StyledButton
          category="primary"
          type="submit"
          disabled={
            isRequiredFieldEmpty ||
            Object.entries(areFieldsValid).some(([_, value]) => !value)
          }
        >
          <Text size={16} lineHeight="sm" weight="bold" color="gray/gray400">
            다음으로
          </Text>
        </StyledButton>
      </StyledButtonContainer>
    </form>
  );
}
