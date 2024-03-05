import React, { ChangeEvent, useState } from 'react';
import { validateCode } from '../../../../apis/member';
import useAuthStore from '../../../../store/useAuthStore';
import useText from '../../../../hooks/common/useText';
import useUserStore from '../../../../store/userStore';
import useRefreshPayload from '../../../../hooks/common/useRefreshPayload';

export default function useCode() {
  const { code, onCodeChange } = useText('code');
  const emailId = useUserStore((state) => state.emailId)!;

  const isCodeEmpty = Boolean(code);
  const accessToken = useAuthStore((state) => state.accessToken)!;

  const refreshPayload = useRefreshPayload();
  const onCodeSubmit = async () => {
    const { success, code: statusCode } = await validateCode(
      emailId,
      code,
      accessToken,
      refreshPayload,
    );
  };

  return { code, onCodeChange, onCodeSubmit, isCodeEmpty };
}
