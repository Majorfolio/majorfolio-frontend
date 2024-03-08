import React, { ChangeEvent, useState } from 'react';
import { server } from 'typescript';
import { ColorType } from '../../../../components/common/theme';
import userStore from '../../../../store/userStore';
import { validateNickname } from '../../../../apis/member';
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

const checkHasWhiteSpace = (nickname: string) => {
  return whitespaceRegex.test(nickname);
};

export default function useSignupNaming() {
  const accessToken = useAuthStore((state) => state.accessToken)!;

  const [nickname, setNickname] = useState('');
  const [serverErrorMessage, setServerErrorMessage] = useState<null | string>(
    null,
  );
  const [isNicknameVerifiedByServer, setIsNicknameVerifiedByServer] =
    useState<boolean>(false);

  const hasKoreanOrEnglishOnly = KoreanAndEnglishRegex.test(nickname);
  const hasMinimumLength = nickname.length >= 2;
  const isNicknameEmpty = nickname.length === 0;

  const canNicknameBeSubmitted =
    hasMinimumLength && hasKoreanOrEnglishOnly && !serverErrorMessage;
  const hasTextfieldError = !isNicknameEmpty && !canNicknameBeSubmitted;

  const helperText =
    (!!serverErrorMessage && serverErrorMessage) ||
    (canNicknameBeSubmitted && HELPER_TEXT.SUCCESS) ||
    (!canNicknameBeSubmitted && HELPER_TEXT.NONCOMPLIANT);

  const changeNickname = (event: ChangeEvent<HTMLInputElement>) => {
    const nextNickname = event.target.value;
    if (
      checkHasWhiteSpace(nextNickname) ||
      nextNickname.length > NICKNAME_MAX_LENGTH
    ) {
      return;
    }

    setNickname(nextNickname);
    setServerErrorMessage(null);
  };

  const refreshPayload = useRefreshPayload();

  const checkIsNicknameValid = async () => {
    const { code } = await validateNickname(
      nickname,
      accessToken,
      refreshPayload,
    );

    if (code === 1000) {
      setIsNicknameVerifiedByServer(true);
      return true;
    }
    if (code === 6002) {
      setIsNicknameVerifiedByServer(false);
      setServerErrorMessage(HELPER_TEXT.ALREADY_IN_USE);
      return false;
    }
    setIsNicknameVerifiedByServer(false);
    setServerErrorMessage(HELPER_TEXT.UNKNOWN);
    return false;
  };

  return {
    changeNickname,
    hasTextfieldError,
    canNicknameBeSubmitted,
    helperText,
    checkIsNicknameValid,
    isNicknameVerifiedByServer,
    nickname,
  };
}
