import React, { ChangeEvent, useState } from 'react';
import { validateCode } from '../../../../apis/member';
import useAuthStore from '../../../../store/useAuthStore';
import useText from '../../../../hooks/common/useText';
import useUserStore from '../../../../store/userStore';

export default function useCode() {
  const { code, onCodeChange } = useText('code');
  const emailId = useUserStore((state) => state.emailId)!;

  const isCodeEmpty = Boolean(code);
  const accessToken = useAuthStore((state) => state.accessToken)!;

  const onCodeSubmit = async () => {
    const { success, message } = await validateCode(emailId, code, accessToken);
  };

  return { code, onCodeChange, onCodeSubmit, isCodeEmpty };
}
