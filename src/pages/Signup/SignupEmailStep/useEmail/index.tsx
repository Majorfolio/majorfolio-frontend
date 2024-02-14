import React, { useState } from 'react';
import useText from '../../../../hooks/common/useText';
import useAuthStore from '../../../../store/authStore';
import { sendCodeToEmail, validateCode } from '../../../../apis/member';
import useEmailStore from '../../../../store/emailStore';

const validateEmail = (email: string): boolean => {
  const emailRegex =
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
  return emailRegex.test(email);
};

export default function useEmail() {
  const { email, onEmailChange } = useText('email');
  const setEmail = useEmailStore((state) => state.setEmail);

  const accessToken = useAuthStore((state) => state.accessToken)!;

  const isEmailValid = validateEmail(email);

  const onEmailSubmit = async () => {
    const currentEmailId = await sendCodeToEmail(email, accessToken);
    setEmail(currentEmailId);
  };

  return { email, onEmailChange, isEmailValid, onEmailSubmit };
}
