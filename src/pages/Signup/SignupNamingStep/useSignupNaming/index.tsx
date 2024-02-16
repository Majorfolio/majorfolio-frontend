import React, { ChangeEvent, useState } from 'react';
import { ColorType } from '../../../../components/common/theme';

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

  const hasTextfieldError =
    !KoreanEnglishAlphabetRegex.test(nickname) || nickname.length < 2;

  const [isNicknameValid, setIsNicknameValid] = useState<boolean>(false);

  const helperText =
    (isNicknameValid && HELPER_TEXT.SUCCESS) ||
    (hasTextfieldError && HELPER_TEXT.NONCOMPLIANT);

  const borderColor: ColorType = hasTextfieldError
    ? 'error/error_color'
    : 'gray/gray100';

  const borderColorOnHover: ColorType = hasTextfieldError
    ? 'error/error_color'
    : 'gray/gray150';

  const borderColorOnFocus: ColorType = hasTextfieldError
    ? 'error/error_color'
    : 'main_color/blue_p';

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

  const onNicknameValidation = () => {
    // TODO nickname validation
    setIsNicknameValid(true);
  };

  // hasTextFieldError
  // onNickNameChange
  // helperText
  // borderColor
  // borderColorOnHover
  // borerColorOnFocus

  return {
    hasTextfieldError,
    onNicknameChange,
    helperText,
    borderColor,
    borderColorOnHover,
    borderColorOnFocus,
    isNicknameValid,
    onNicknameValidation,
    nickname,
  };
}
