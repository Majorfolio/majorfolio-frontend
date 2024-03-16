import React, { ChangeEvent, useState } from 'react';
import { server } from 'typescript';
import { ColorType } from '../../../../components/common/theme';
import userStore from '../../../../store/userStore';
import { validateNickName } from '../../../../apis/member';
import useAuthStore from '../../../../store/useAuthStore';
import useRefreshPayload from '../../../../hooks/common/useRefreshPayload';

const NICKNAME_MIN_LENGTH = 2;
const NICKNAME_MAX_LENGTH = 8;
const HELPER_TEXT = {
  NONCOMPLIANT: '2~8자의 영어 또는 한글로 입력해주세요.',
  ALREADY_IN_USE: '이미 사용중인 닉네임이에요',
  PREVIOUS_NAME: '기존 닉네임과 같아요',
  SUCCESS: '사용 가능한 닉네임입니다',
  UNKNOWN: '알 수 없는 에러입니다. 잠시 후에 다시 시도해주세요.',
};

export const KoreanAndEnglishRegex = /^[가-힣a-zA-Z]+$/;
const whitespaceRegex = /\s/;

const checkHasWhiteSpace = (nickName: string) => {
  return whitespaceRegex.test(nickName);
};

export default function useSignupNaming() {
  const accessToken = useAuthStore((state) => state.accessToken)!;

  const [nickName, setNickName] = useState('');
  const [serverErrorMessage, setServerErrorMessage] = useState<null | string>(
    null,
  );
  const [isNickNameVerifiedByServer, setIsNickNameVerifiedByServer] =
    useState<boolean>(false);

  const hasKoreanOrEnglishOnly = KoreanAndEnglishRegex.test(nickName);
  const hasMinimumLength = nickName.length >= 2;
  const isNickNameEmpty = nickName.length === 0;

  const canNickNameBeSubmitted =
    hasMinimumLength && hasKoreanOrEnglishOnly && !serverErrorMessage;
  const hasTextfieldError = !isNickNameEmpty && !canNickNameBeSubmitted;

  const helperText =
    (!!serverErrorMessage && serverErrorMessage) ||
    (canNickNameBeSubmitted && HELPER_TEXT.SUCCESS) ||
    (!canNickNameBeSubmitted && HELPER_TEXT.NONCOMPLIANT);

  const changeNickName = (event: ChangeEvent<HTMLInputElement>) => {
    const nextNickName = event.target.value;
    if (
      checkHasWhiteSpace(nextNickName) ||
      nextNickName.length > NICKNAME_MAX_LENGTH
    ) {
      return;
    }

    setNickName(nextNickName);
    setServerErrorMessage(null);
  };

  const refreshPayload = useRefreshPayload();

  const checkIsNickNameValid = async () => {
    const { code } = await validateNickName(
      nickName,
      accessToken,
      refreshPayload,
    );

    if (code === 1000) {
      setIsNickNameVerifiedByServer(true);
      return true;
    }
    if (code === 6002) {
      setIsNickNameVerifiedByServer(false);
      setServerErrorMessage(HELPER_TEXT.ALREADY_IN_USE);
      return false;
    }
    setIsNickNameVerifiedByServer(false);
    setServerErrorMessage(HELPER_TEXT.UNKNOWN);
    return false;
  };

  return {
    changeNickName,
    hasTextfieldError,
    canNickNameBeSubmitted,
    helperText,
    checkIsNickNameValid,
    isNickNameVerifiedByServer,
    nickName,
  };
}
