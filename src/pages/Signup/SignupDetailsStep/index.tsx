import React, { ChangeEvent, FormEvent, useState } from 'react';
import { StyledTextContainer } from '../../../components/common/HelperText/index.styles';
import Text from '../../../components/common/Text';
import SearchableDropdown, {
  Dropdown,
} from '../../../components/common/Dropdown';
import {
  StyledButtonContainer,
  StyledDropdownContainer,
} from '../SignupEmailStep/index.styles';
import Button from '../../../components/common/Button';
import { HelperCancelIcon } from '../../../assets/icons';
import useSearchQueries from './useSearchQueries.tsx';
import StyledButton from './index.styles';
import userStore from '../../../store/userStore';
import TextField from '../../../components/common/TextField';
import { KoreanAndEnglishRegex } from '../SignupNamingStep/useSignupNaming';

interface SignupDetailsStepPropsType {
  onNext: () => void;
}

enum CATEGORIES {
  SCHOOL_STR = '학교',
  ADMISSION_YEAR_STR = '학번',
  MAJOR_STR = '본 전공',
  MINOR_STR = '제2 전공(선택)',
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isSchoolValid = CATEGORY_OPTIONS.SCHOOLS.some(
      (schoolOption) => school === schoolOption,
    );

    const isAdmissionYearValid = CATEGORY_OPTIONS.ADMISSION_YEARS.some(
      (admissionYearOption) => admissionYearOption === admissionYear,
    );

    const isMajorValid = KoreanAndEnglishRegex.test(major);

    const isMinorValid =
      !minor || (KoreanAndEnglishRegex.test(minor) && minor !== major);

    if (isSchoolValid && isAdmissionYearValid && isMajorValid && isMinorValid) {
      updateDetails({
        universityName: school,
        studentId: Number(admissionYear.slice(0, 2)),
        major1: major,
        major2: minor,
      });
      onNext();
    }

    setAreFieldsValid({
      school: isSchoolValid,
      admissionYear: isAdmissionYearValid,
      major: isMajorValid,
      minor: isMinorValid,
    });
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
        <SearchableDropdown
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
          onFocus={() =>
            setAreFieldsValid((previousAreFieldsValid) => ({
              ...previousAreFieldsValid,
              admissionYear: true,
            }))
          }
          icon={areFieldsValid.admissionYear ? undefined : <HelperCancelIcon />}
          searchQuery={admissionYear}
          onSearchQueryUpdate={createSearchQueryUpdater('admissionYear')}
        />

        <TextField
          id="text"
          type="text"
          icon={areFieldsValid.major ? undefined : <HelperCancelIcon />}
          placeholder={CATEGORIES.MAJOR_STR}
          text={major}
          onTextChange={(event: ChangeEvent<HTMLInputElement>) => {
            createSearchQueryUpdater('major')(event.target.value);
            setAreFieldsValid((previousAreFieldsValid) => ({
              ...previousAreFieldsValid,
              major: true,
            }));
          }}
          hasError={!areFieldsValid.major}
        />
        <TextField
          id="text"
          type="text"
          icon={areFieldsValid.minor ? undefined : <HelperCancelIcon />}
          placeholder={CATEGORIES.MINOR_STR}
          text={minor}
          onTextChange={(event: ChangeEvent<HTMLInputElement>) => {
            createSearchQueryUpdater('minor')(event.target.value);
            setAreFieldsValid((previousAreFieldsValid) => ({
              ...previousAreFieldsValid,
              minor: true,
            }));
          }}
          hasError={!areFieldsValid.minor}
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
