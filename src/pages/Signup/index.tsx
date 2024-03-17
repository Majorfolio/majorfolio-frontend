import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '../../components/common/Text';
import { ArrowBackDefaultIcon } from '../../assets/icons';
import SignupEmailStep from './SignupEmailStep';
import SignupDetailsStep from './SignupDetailsStep';
import SignupNamingStep from './SignupNamingStep';
import useRequireAuth from '../../hooks/common/useRequireAuth';
import SignupCodeStep from './SignupCodeStep';
import useAuthStore, { AuthLevel } from '../../store/useAuthStore';
import StyledPageContainer from '../Upload/UploadDefaultStep/index.styles';
import SignupTermsAndConditionsStep from './SignupTermsAndConditionsStep';
import { SecondaryTopbar } from '../../components/common/TopBar';
import TermsAndConditionsDetailStep from './TermsAndConditionsDetailStep';

interface SignupPropsType {
  isEmailConfirmed?: boolean;
}

enum SignupStep {
  Email,
  Code,
  Details,
  NickName,
  TermsAndConditions,
  TermsAndConditionsDetails,
}

export default function Signup({ isEmailConfirmed = false }: SignupPropsType) {
  const [step, setStep] = useState<SignupStep>(SignupStep.Email);
  const navigate = useNavigate();
  const { isAuthLevelSatisfied } = useRequireAuth(
    AuthLevel.Unverified,
    AuthLevel.Verified,
  );
  const authLevel = useAuthStore((state) => state.authLevel);
  const [selectedTab, setSelectedTab] = useState<number>(-1);

  const title =
    selectedTab === -1
      ? '개인정보'
      : selectedTab === 0
        ? '서비스 이용약관'
        : selectedTab === 1
          ? '개인정보처리방식'
          : selectedTab === 2
            ? '광고성 마케팅 수신'
            : '개인정보';

  useEffect(() => {
    if (authLevel === AuthLevel.Verified) {
      setStep(SignupStep.Details);
    }
  }, [authLevel, setStep]);

  if (!isAuthLevelSatisfied) {
    return (
      <>유효하지 않은 페이지로 이동하였습니다. 메인 화면으로 이동합니다.</>
    );
  }

  const changeSelectedTab = (newTab: number) => {
    setSelectedTab(newTab);
  };

  return (
    <>
      <SecondaryTopbar
        transition={
          <button
            type="button"
            onClick={() => {
              if (selectedTab >= 0) {
                setStep(SignupStep.TermsAndConditions);
                setSelectedTab(-1);
                return;
              }
              navigate('/');
            }}
            aria-label="prev"
          >
            <ArrowBackDefaultIcon />
          </button>
        }
        title={
          <Text size={18} weight="bold" lineHeight="sm" color="gray/gray900">
            {title}
          </Text>
        }
      />
      <StyledPageContainer>
        {step === SignupStep.Email && (
          <SignupEmailStep onNext={() => setStep(SignupStep.Code)} />
        )}
        {step === SignupStep.Code && (
          <SignupCodeStep
            onNext={() => setStep(SignupStep.Details)}
            onPrevious={() => setStep(SignupStep.Email)}
          />
        )}
        {step === SignupStep.Details && (
          <SignupDetailsStep onNext={() => setStep(SignupStep.NickName)} />
        )}
        {step === SignupStep.NickName && (
          <SignupNamingStep
            onNext={() => setStep(SignupStep.TermsAndConditions)}
          />
        )}
        {step === SignupStep.TermsAndConditions && (
          <SignupTermsAndConditionsStep
            onNext={() => navigate('/', { replace: true })}
            onDetails={() => setStep(SignupStep.TermsAndConditionsDetails)}
            changeSelectedTab={changeSelectedTab}
          />
        )}
        {step === SignupStep.TermsAndConditionsDetails && (
          <TermsAndConditionsDetailStep
            selectedTab={selectedTab}
            onPrevious={() => {
              setStep(SignupStep.TermsAndConditions);
              setSelectedTab(-1);
            }}
          />
        )}
      </StyledPageContainer>
    </>
  );
}
