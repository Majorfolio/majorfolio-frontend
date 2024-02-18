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

interface SignupPropsType {
  isEmailConfirmed?: boolean;
}

export default function Signup({ isEmailConfirmed = false }: SignupPropsType) {
  const [step, setStep] = useState<'email' | 'code' | 'details' | 'naming'>(
    'email',
  );
  const navigate = useNavigate();
  const emailId = useUserStore((state) => state.emailId);

  useEffect(() => {
    if (emailId) {
      setStep('details');
    }
  }, [emailId]);

  const { isUserSignedin } = useRequireAuth('member');

  if (!isUserSignedin) {
    return <>로그인이 되지 않았습니다. 메인 화면으로 이동합니다.</>;
  }

  return (
    <>
      {step === 'email' && <SignupEmailStep onNext={() => setStep('code')} />}
      {step === 'code' && <SignupCodeStep onNext={() => setStep('details')} />}
      {step === 'details' && (
        <SignupDetailsStep onNext={() => setStep('naming')} />
      )}
      {step === 'naming' && (
        <SignupNamingStep onNext={() => navigate('/home', { replace: true })} />
      )}
    </>
  );
}
