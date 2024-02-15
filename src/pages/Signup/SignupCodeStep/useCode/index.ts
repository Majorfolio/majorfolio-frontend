import React, { ChangeEvent, useState } from 'react';
import { validateCode } from '../../../../apis/member';
import useAuthStore from '../../../../store/authStore';
import useEmailStore from '../../../../store/emailStore';
import useText from '../../../../hooks/common/useText';

export default function useCode() {
  const { code, onCodeChange } = useText('code');
  const emailId = useEmailStore((state) => state.emailId)!;

  const isCodeEmpty = Boolean(code);
  const accessToken = useAuthStore((state) => state.accessToken)!;

  const onCodeSubmit = async () => {
    const { success, message } = await validateCode(emailId, code, accessToken);
  };

  return { code, onCodeChange, onCodeSubmit, isCodeEmpty };
}
