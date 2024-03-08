import React, { FormEvent, useState } from 'react';
import { access } from 'fs';
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
import { sendNewUser } from '../../../apis/member';
import useRefreshPayload from '../../../hooks/common/useRefreshPayload';
import useFormSubmission from '../../../hooks/common/useFormSubmission';

interface SignupTermsAndConditionsStepPropsType {
  onNext?: () => void;
}

export default function SignupTermsAndConditionsStep({
  onNext = () => {},
}: SignupTermsAndConditionsStepPropsType) {
  const [isFirstTermAgreed, setIsFirstTermAgreed] = useState<boolean>(false);
  const [isSecondTermAgreed, setIsSecondTermAgreed] = useState<boolean>(false);

  const {
    updateNickname,
    nickName,
    emailId,
    universityName,
    studentId,
    major1,
    major2,
  } = userStore((state) => state);
  const accessToken = useAuthStore((state) => state.accessToken)!;
  const refreshToken = useAuthStore((state) => state.refreshToken)!;
  const refresh = useAuthStore((state) => state.refresh);

  const setIsMember = useAuthStore((state) => state.setIsMember)!;

  const refreshPayload = useRefreshPayload();

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

  const areAllTermsChecked = isFirstTermAgreed && isSecondTermAgreed;

  const signup = async () => {
    if (areAllTermsChecked) {
      await sendNewUser(
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
        refreshPayload,
      );
      setIsMember();
      refresh(accessToken, refreshToken);
    }
  };

  const { isSubmitting, handleSubmit } = useFormSubmission(async () => {
    await signup();
    onNext();
  });

  return (
    <form onSubmit={handleSubmit}>
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
        <Button
          category="primary"
          type="submit"
          disabled={!areAllTermsChecked || isSubmitting}
        >
          <Text size={16} weight="bold" color="gray/white" lineHeight="sm">
            로그인
          </Text>
        </Button>
      </StyledButtonContainer>
    </form>
  );
}
