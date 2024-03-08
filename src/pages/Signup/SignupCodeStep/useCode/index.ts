import React, { ChangeEvent, useState } from 'react';
import { Server } from 'http';
import { validateCode } from '../../../../apis/member';
import useAuthStore from '../../../../store/useAuthStore';
import useText from '../../../../hooks/common/useText';
import useUserStore from '../../../../store/userStore';
import useRefreshPayload from '../../../../hooks/common/useRefreshPayload';

export enum ServerError {
  INCORRECT = '인증 코드가 다릅니다.',
  EXPIRED = '인증 시간이 만료되었습니다. 재인증해주세요.',
  UNKNOWN = '알 수 없는 에러 발생했습니다.',
}

export default function useCode() {
  const [code, setCode] = useState('');
  const emailId = useUserStore((state) => state.emailId)!;
  const [serverErrorMessage, setServerErrorMessage] =
    useState<null | ServerError>(null);

  const isCodeEmpty = !code;
  const accessToken = useAuthStore((state) => state.accessToken)!;

  const onCodeChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setCode(event.target.value);
    setServerErrorMessage(null);
  };

  const refreshPayload = useRefreshPayload();
  const submitCode = async () => {
    const data = await validateCode(emailId, code, accessToken, refreshPayload);
    const { success, code: statusCode, message } = data;
    console.log(data);

    if (statusCode === 1000) {
      return true;
    }
    if (statusCode === 5005) {
      setServerErrorMessage(ServerError.INCORRECT);
      return false;
    }
    if (statusCode === 5004) {
      setServerErrorMessage(ServerError.EXPIRED);
      return false;
    }
    setServerErrorMessage(ServerError.UNKNOWN);
    return false;
  };

  return { code, onCodeChange, submitCode, isCodeEmpty, serverErrorMessage };
}
