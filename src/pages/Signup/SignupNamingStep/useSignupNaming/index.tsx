import React, { ChangeEvent, useState } from 'react';
import { ColorType } from '../../../../components/common/theme';
import userStore from '../../../../store/userStore';
import { verifyNickname } from '../../../../apis/member';
import useAuthStore from '../../../../store/authStore';

const NICKNAME_MIN_LENGTH = 2;
const NICKNAME_MAX_LENGTH = 8;
const HELPER_TEXT = {
  NONCOMPLIANT: '2~8자의 영어 또는 한글로 입력해주세요.',
  ALREADY_IN_USE: '이미 사용중인 닉네임이에요',
  PREVIOUS_NAME: '기존 닉네임과 같아요',
  SUCCESS: '사용 가능한 닉네임입니다',
};

const KoreanEnglishAlphabetRegex = /^[가-힣a-zA-Z]+$/;

export default function useSignupNaming() {
  // TODO validate nickname
  // length 2 - 8 UI에 표시하기
  // letter: Korean or Alphabet
  // check if it already exists on the app
  // check if user is already using it
  //  영어한글 > 등록된 닉네임 > 현재 닉네임

  // "2~8자의 영어 또는 한글로 입력해주세요"
  // 이미 사용중인 닉네임이에요
  // 기존 닉네임과 같아요

  const [nickname, setNickname] = useState('');

  const accessToken = useAuthStore((state) => state.accessToken)!;

  const hasTextfieldError =
    !KoreanEnglishAlphabetRegex.test(nickname) || nickname.length < 2;

  const [isNicknameValid, setIsNicknameValid] = useState<boolean>(false);

  const helperText =
    (isNicknameValid && HELPER_TEXT.SUCCESS) ||
    (hasTextfieldError && HELPER_TEXT.NONCOMPLIANT);

  const onNicknameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextNickname = event.target.value;
    const whitespaceRegex = /\s/;
    if (
      whitespaceRegex.test(nextNickname) ||
      nextNickname.length > NICKNAME_MAX_LENGTH
    ) {
      return;
    }

    setNickname(event.target.value);
    setIsNicknameValid(false);
  };

  const onNicknameValidation = async () => {
    const currentIsNicknameValid = await verifyNickname(nickname, accessToken);
    console.log(currentIsNicknameValid);
    if (currentIsNicknameValid !== undefined) {
      setIsNicknameValid(currentIsNicknameValid);
    }
  };

  return {
    hasTextfieldError,
    onNicknameChange,
    helperText,
    isNicknameValid,
    onNicknameValidation,
    nickname,
  };
}
