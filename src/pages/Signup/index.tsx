import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '../../components/common/Text';
import TextField from '../../components/common/TextField';
import HelperText from '../../components/common/HelperText';
import StyledSignup from './index.styles';
import {
  StyledButtonContainer,
  StyledTextContainer,
} from '../../components/common/HelperText/index.styles';
import Button from '../../components/common/Button';
import { CancelDefaultIcon } from '../../assets/icons';
import Tag from '../../components/common/Tag';
import SignupEmailStep from './SignupEmailStep';
import SignupDetailsStep from './SignupDetailsStep';
import SignupNamingStep from './SignupNamingStep';
import useRequireAuth from '../../hooks/common/useRequireAuth';
import SignupCodeStep from './SignupCodeStep';
import useUserStore from '../../store/userStore';
import useAuthStore, { AuthLevel } from '../../store/useAuthStore';
import StyledPageContainer from '../Upload/UploadDefaultStep/index.styles';
import SignupTermsAndConditionsStep from './SignupTermsAndConditionsStep';
import useAutoSignin from '../../hooks/common/useAutoSignin';

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

  if (!isAuthLevelSatisfied) {
    return (
      <>유효하지 않은 페이지로 이동하였습니다. 메인 화면으로 이동합니다.</>
    );
  }

  return (
    <StyledPageContainer>
      {step === SignupStep.Email && (
        <SignupEmailStep onNext={() => setStep(SignupStep.Code)} />
      )}
      {step === SignupStep.Code && (
        <SignupCodeStep onNext={() => setStep(SignupStep.Details)} />
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
  );
}
