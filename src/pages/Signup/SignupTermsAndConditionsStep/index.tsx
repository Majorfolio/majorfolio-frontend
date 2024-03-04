import React, { FormEvent, useState } from 'react';
import { CheckboxDefaultIcon, CheckboxFilledIcon } from '../../../assets/icons';
import Text from '../../../components/common/Text';
import StyledAgreeAllRow, {
  StyledButtonContainer,
  StyledConditionRow,
  StyledConditionRow2,
} from './index.styles';
import Button from '../../../components/common/Button';
import CheckboxWithIcon from '../../../components/common/CheckboxWithIcon';
import userStore from '../../../store/userStore';
import useAuthStore from '../../../store/useAuthStore';
import { signup } from '../../../apis/member';

interface SignupTermsAndConditionsStepPropsType {
  onNext?: () => void;
}

export default function SignupTermsAndConditionsStep({
  onNext = () => {},
}: SignupTermsAndConditionsStepPropsType) {
  const [isFirstTermAgreed, setIsFirstTermAgreed] = useState<boolean>(false);
  const [isSecondTermAgreed, setIsSecondTermAgreed] = useState<boolean>(false);
  // TODO update global state
  const {
    updateNickname,
    nickName,
    emailId,
    universityName,
    studentId,
    major1,
    major2,
    personalAgree,
    serviceAgree,
    marketingAgree,
  } = userStore((state) => state);
  const accessToken = useAuthStore((state) => state.accessToken)!;
  const setIsMember = useAuthStore((state) => state.setIsMember)!;

  const onFirstTermChange = () =>
    setIsFirstTermAgreed(
      (currentIsFirstTermAgreed) => !currentIsFirstTermAgreed,
    );
  const onSecondTermChange = () =>
    setIsSecondTermAgreed(
      (currentIsSecondTermAgreed) => !currentIsSecondTermAgreed,
    );

  const onBothTermsChange = () => {
    onFirstTermChange();
    onSecondTermChange();
  };

  const onLogin = async (event: FormEvent) => {
    event.preventDefault();
    if (isFirstTermAgreed && isSecondTermAgreed) {
      await signup(
        {
          nickName,
          emailId,
          universityName,
          studentId,
          major1,
          major2,
          personalAgree: isFirstTermAgreed,
          serviceAgree: isSecondTermAgreed,
          marketingAgree: true,
        },
        accessToken,
      );
      setIsMember();
      onNext();
    }
  };
  // TODO use Form submission
  return (
    <form onSubmit={onLogin}>
      <StyledAgreeAllRow>
        <CheckboxWithIcon
          isChecked={isFirstTermAgreed && isSecondTermAgreed}
          icon={
            isFirstTermAgreed && isSecondTermAgreed ? (
              <CheckboxFilledIcon />
            ) : (
              <CheckboxDefaultIcon />
            )
          }
          text="전체 동의"
          id="전체 동의"
          onCheckboxChange={onBothTermsChange}
        />
      </StyledAgreeAllRow>
      <StyledConditionRow>
        <CheckboxWithIcon
          isChecked={isFirstTermAgreed}
          icon={
            isFirstTermAgreed ? <CheckboxFilledIcon /> : <CheckboxDefaultIcon />
          }
          text="개인정보 수집 동의(필수)"
          id="개인정보 수집 동의(필수)"
          onCheckboxChange={onFirstTermChange}
        />
      </StyledConditionRow>
      <StyledConditionRow2>
        <CheckboxWithIcon
          isChecked={isSecondTermAgreed}
          icon={
            isSecondTermAgreed ? (
              <CheckboxFilledIcon />
            ) : (
              <CheckboxDefaultIcon />
            )
          }
          text="서비스 이용 약관 동의(필수)"
          id="서비스 이용 약관 동의(필수)"
          onCheckboxChange={onSecondTermChange}
        />
      </StyledConditionRow2>
      <StyledButtonContainer>
        <Button category="primary" type="submit">
          <Text size={16} weight="bold" color="gray/white" lineHeight="sm">
            로그인
          </Text>
        </Button>
      </StyledButtonContainer>
    </form>
  );
}
