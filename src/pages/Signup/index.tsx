import React, { useState } from 'react';
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

interface SignupPropsType {
  isEmailConfirmed?: boolean;
}

export default function Signup({ isEmailConfirmed = false }: SignupPropsType) {
  const [step, setStep] = useState<'email' | 'details' | 'naming'>('email');
  const navigate = useNavigate();
  return (
    <>
      {step === 'email' && (
        <SignupEmailStep onNext={() => setStep('details')} />
      )}
      {step === 'details' && (
        <SignupDetailsStep onNext={() => setStep('naming')} />
      )}
      {step === 'naming' && (
        <SignupNamingStep onNext={() => navigate('/home', { replace: true })} />
      )}
    </>
  );
}
