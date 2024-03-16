import React, { FormEvent, useState } from 'react';
import { access } from 'fs';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRightDefaultIcon,
  CheckboxDefaultIcon,
  CheckboxFilledIcon,
  CheckboxUnselectedIcon,
} from '../../../assets/icons';
import Text from '../../../components/common/Text';
import StyledAgreeAllRow, {
  StyledArrowButton,
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
import RowButton from '../../../components/common/RowButton';
import StyledRow from '../../../components/common/Row/index.styles';

interface SignupTermsAndConditionsStepPropsType {
  onNext?: () => void;
  onDetails?: () => void;
  changeSelectedTab?: (newTab: number) => void;
}

export default function SignupTermsAndConditionsStep({
  onNext = () => {},
  onDetails = () => {},
  changeSelectedTab,
}: SignupTermsAndConditionsStepPropsType) {
  const [isFirstTermAgreed, setIsFirstTermAgreed] = useState<boolean>(false);
  const [isSecondTermAgreed, setIsSecondTermAgreed] = useState<boolean>(false);
  const [isThirdTermAgreed, setIsThirdTermAgreed] = useState<boolean>(false);

  const navigate = useNavigate();

  const { updateNickName, nickName, emailId, univ, studentId, major1, major2 } =
    userStore((state) => state);
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

  const onThirdTermChange = () =>
    setIsThirdTermAgreed(
      (currentIsThirdTermAgreed) => !currentIsThirdTermAgreed,
    );

  const agreeBothTerms = () => {
    setIsFirstTermAgreed(true);
    setIsSecondTermAgreed(true);
    setIsThirdTermAgreed(true);
  };

  const areAllTermsChecked = isFirstTermAgreed && isSecondTermAgreed;

  const signup = async () => {
    if (areAllTermsChecked) {
      const { code, status, result } = await sendNewUser(
        {
          nickName,
          emailId,
          univ,
          studentId,
          major1,
          major2,
          personalAgree: isFirstTermAgreed,
          serviceAgree: isSecondTermAgreed,
          marketingAgree: isThirdTermAgreed,
        },
        accessToken,
        refreshPayload,
      );
      if (code === 1000) {
        const { accessToken: newAccessToken } = result;
        setIsMember();
        refresh(newAccessToken, refreshToken);
      }
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
              <CheckboxUnselectedIcon />
            )
          }
          text="전체 동의"
          id="전체 동의"
          onCheckboxChange={agreeBothTerms}
        />
      </StyledAgreeAllRow>
      <StyledConditionRow>
        <CheckboxWithIcon
          isChecked={isFirstTermAgreed}
          icon={
            isFirstTermAgreed ? (
              <CheckboxFilledIcon />
            ) : (
              <CheckboxUnselectedIcon />
            )
          }
          text="서비스 이용약관 동의 (필수)"
          id="서비스 이용약관 동의 (필수)"
          onCheckboxChange={onFirstTermChange}
        />
        <StyledArrowButton
          onClick={() => {
            if (changeSelectedTab) {
              changeSelectedTab(0);
            }
            onDetails();
          }}
          type="button"
        >
          <ArrowRightDefaultIcon />
        </StyledArrowButton>
      </StyledConditionRow>
      <StyledConditionRow2>
        <CheckboxWithIcon
          isChecked={isSecondTermAgreed}
          icon={
            isSecondTermAgreed ? (
              <CheckboxFilledIcon />
            ) : (
              <CheckboxUnselectedIcon />
            )
          }
          text="개인정보 수집 및 이용 동의 (필수)"
          id="개인정보 수집 및 이용 동의 (필수)"
          onCheckboxChange={onSecondTermChange}
        />
        <StyledArrowButton
          onClick={() => {
            if (changeSelectedTab) {
              changeSelectedTab(1);
            }
            onDetails();
          }}
          type="button"
        >
          <ArrowRightDefaultIcon />
        </StyledArrowButton>
      </StyledConditionRow2>
      <StyledConditionRow2>
        <CheckboxWithIcon
          isChecked={isThirdTermAgreed}
          icon={
            isThirdTermAgreed ? (
              <CheckboxFilledIcon />
            ) : (
              <CheckboxUnselectedIcon />
            )
          }
          text="광고성 정보 수신 동의 (선택)"
          id="광고성 정보 수신 동의 (선택)"
          onCheckboxChange={onThirdTermChange}
        />
        <StyledArrowButton
          onClick={() => {
            if (changeSelectedTab) {
              changeSelectedTab(2);
            }
            onDetails();
          }}
          type="button"
        >
          <ArrowRightDefaultIcon />
        </StyledArrowButton>
      </StyledConditionRow2>
      <StyledButtonContainer>
        <Button
          category="primary"
          type="submit"
          disabled={!areAllTermsChecked || isSubmitting}
        >
          <Text size={16} weight="bold" color="gray/white" lineHeight="sm">
            회원가입 완료
          </Text>
        </Button>
      </StyledButtonContainer>
    </form>
  );
}
