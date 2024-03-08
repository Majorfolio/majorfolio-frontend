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

interface SignupPropsType {
  isEmailConfirmed?: boolean;
}

enum SignupStep {
  Email,
  Code,
  Details,
  Nickname,
  TermsAndConditions,
}

export default function Signup({ isEmailConfirmed = false }: SignupPropsType) {
  const [step, setStep] = useState<SignupStep>(SignupStep.Email);
  const navigate = useNavigate();
  const { isAuthLevelSatisfied } = useRequireAuth(
    AuthLevel.Unverified,
    AuthLevel.Verified,
  );
  const authLevel = useAuthStore((state) => state.authLevel);

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

  return (
    <>
      <SecondaryTopbar
        transition={
          <button type="button" onClick={() => navigate('/')} aria-label="prev">
            <ArrowBackDefaultIcon />
          </button>
        }
        title={
          <Text size={18} weight="bold" lineHeight="sm" color="gray/gray900">
            개인정보
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
          <SignupDetailsStep onNext={() => setStep(SignupStep.Nickname)} />
        )}
        {step === SignupStep.Nickname && (
          <SignupNamingStep
            onNext={() => setStep(SignupStep.TermsAndConditions)}
          />
        )}
        {step === SignupStep.TermsAndConditions && (
          <SignupTermsAndConditionsStep
            onNext={() => navigate('/', { replace: true })}
          />
        )}
      </StyledPageContainer>
    </>
  );
}
