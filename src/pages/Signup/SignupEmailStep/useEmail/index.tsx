import React from 'react';
import useText from '../../../../hooks/common/useText';

const validateEmail = (email: string): boolean => {
  const emailRegex =
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
  return emailRegex.test(email);
};

export default function useEmail() {
  const { email, onEmailChange } = useText('email');

  const isEmailValid = validateEmail(email);

  // TODO create onEmailSubmit function which sends access token
  // TODO add zustand to package.json
  // TODO store access token in zustand to send access token

  return { email, onEmailChange, isEmailValid };
}
