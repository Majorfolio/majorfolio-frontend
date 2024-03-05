import React, { ChangeEvent, useState } from 'react';
import useText from '../../../../hooks/common/useText';
import useAuthStore from '../../../../store/useAuthStore';
import { sendCodeToEmail, validateCode } from '../../../../apis/member';
import useEmailStore from '../../../../store/useEmailStore';
import useUserStore from '../../../../store/userStore';
import useRefreshPayload from '../../../../hooks/common/useRefreshPayload';

const validateEmail = (email: string): boolean => {
  const emailRegex =
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/;
  return emailRegex.test(email);
};

enum ServerError {
  NOT_SCHOOL_EMAIL = '학교 이메일이 아닙니다',
  INCORRECT_FORMAT = '올바르지 않은 이메일입니다.',
  ALREADY_IN_USE = '이미 인증한 이메일입니다.',
}

export default function useEmail() {
  const [email, setEmail] = useState('');
  const updateEmail = useUserStore((state) => state.updateEmail);
  const [serverErrorMessage, setServerErrorMessage] =
    useState<null | ServerError>(null);

  const accessToken = useAuthStore((state) => state.accessToken)!;

  const isEmailValid = validateEmail(email);

  const onEmailChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEmail(event.target.value);
    setServerErrorMessage(null);
  };

  const refreshPayload = useRefreshPayload();

  const onEmailSubmit = async () => {
    const { code, status, message, result } = await sendCodeToEmail(
      email,
      accessToken,
      refreshPayload,
    );
    if (code === 5000) {
      setServerErrorMessage(ServerError.INCORRECT_FORMAT);
      return false;
    }
    if (code === 5001) {
      setServerErrorMessage(ServerError.NOT_SCHOOL_EMAIL);
      return false;
    }
    if (code === 5002) {
      setServerErrorMessage(ServerError.ALREADY_IN_USE);
      return false;
    }
    if (code === 1000) {
      const { emailId } = result;
      updateEmail(emailId);
      return true;
    }
    return false;
  };

  const onDeleteAll = () => {
    setEmail('');
  };

  return {
    email,
    onEmailChange,
    isEmailValid,
    onEmailSubmit,
    serverErrorMessage,
    onDeleteAll,
  };
}
