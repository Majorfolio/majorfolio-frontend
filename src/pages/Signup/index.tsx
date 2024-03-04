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
import useAuthStore from '../../store/authStore';
import StyledPageContainer from '../Upload/UploadDefaultStep/index.styles';
import SignupTermsAndConditionsStep from './SignupTermsAndConditionsStep';

interface SignupPropsType {
  isEmailConfirmed?: boolean;
}

export default function Signup({ isEmailConfirmed = false }: SignupPropsType) {
  const [step, setStep] = useState<
    'email' | 'code' | 'details' | 'naming' | 'terms'
  >('email');
  const navigate = useNavigate();
  const emailId = useUserStore((state) => state.emailId);
  const isMember = useAuthStore((state) => state.isMember);

  useEffect(() => {
    if (emailId) {
      setStep('details');
    }
    if (isMember) {
      navigate('/');
    }
  }, [emailId, isMember]);

  const { isUserSignedin } = useRequireAuth('member');

  if (!isUserSignedin) {
    return <>로그인이 되지 않았습니다. 메인 화면으로 이동합니다.</>;
  }

  if (isMember) {
    return <>이미 회원가입한 유저입니다. 메인 화면으로 이동합니다.</>;
  }

  return (
    <StyledPageContainer>
      {step === 'email' && <SignupEmailStep onNext={() => setStep('code')} />}
      {step === 'code' && <SignupCodeStep onNext={() => setStep('details')} />}
      {step === 'details' && (
        <SignupDetailsStep onNext={() => setStep('naming')} />
      )}
      {step === 'naming' && (
        <SignupNamingStep onNext={() => setStep('terms')} />
      )}
      {step === 'terms' && (
        <SignupTermsAndConditionsStep
          onNext={() => navigate('/', { replace: true })}
        />
      )}
    </StyledPageContainer>
  );
}
