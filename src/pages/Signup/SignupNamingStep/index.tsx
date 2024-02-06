import React, { ChangeEvent, useState } from 'react';
import Text from '../../../components/common/Text';
import { StyledTextContainer } from '../../../components/common/HelperText/index.styles';
import TextField from '../../../components/common/TextField';
import HelperText from '../../../components/common/HelperText';
import { ErrorDefaultIcon } from '../../../assets/icons';
import Button from '../../../components/common/Button';
import StyledValidationContainer from './index.styles';

const NICKNAME_MIN_LENGTH = 2;
const NICKNAME_MAX_LENGTH = 8;
const HELPER_TEXT = {
  NONCOMPLIANT: '2~8자의 영어 또는 한글로 입력해주세요.',
  ALREADY_IN_USE: '이미 사용중인 닉네임이에요',
  PREVIOUS_NAME: '기존 닉네임과 같아요',
  SUCCESS: '사용 가능한 닉네임입니다',
};

const KoreanEnglishAlphabetRegex = /^[가-힣a-zA-Z]+$/;

export default function SignupNamingStep() {
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

  const borderColor = hasTextfieldError ? 'error/error_color' : 'gray/gray100';

  const borderColorOnHover = hasTextfieldError
    ? 'error/error_color'
    : 'gray/gray150';

  const borderColorOnFocus = hasTextfieldError
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

  const textfieldIcon = hasTextfieldError ? (
    <ErrorDefaultIcon />
  ) : (
    <Text size={16} lineHeight="lg" color="gray/gray400">
      {nickname.length} / {NICKNAME_MAX_LENGTH}
    </Text>
  );

  const onNicknameValidation = () => {
    // TODO nickname validation
    setIsNicknameValid(true);
  };

  // TODO: adjeust margin of icon props
  return (
    <StyledTextContainer>
      <Text as="div" size={22} lineHeight="lg">
        나만의 독특한
      </Text>
      <Text as="div" size={22} weight="bold" lineHeight="lg">
        닉네임을 입력해주세요
      </Text>

      <TextField
        id="text"
        type="text"
        borderColor={borderColor}
        borderColorOnHover={borderColorOnHover}
        borderColorOnFocus={borderColorOnFocus}
        icon={textfieldIcon}
        placeholder="닉네임"
        value={nickname}
        onChange={onNicknameChange}
      />
      {(isNicknameValid && (
        <HelperText type="checked">{helperText}</HelperText>
      )) ||
        (hasTextfieldError && (
          <HelperText type="error">{helperText}</HelperText>
        ))}
      <StyledValidationContainer>
        {isNicknameValid ? (
          <Button backgroundColor="main_color/blue_p">
            <Text color="gray/white" size={16} weight="bold" lineHeight="sm">
              다음으로
            </Text>
          </Button>
        ) : (
          <Button
            backgroundColor={
              hasTextfieldError ? 'gray/gray100' : 'sub_color/indigo/c'
            }
            onClick={onNicknameValidation}
          >
            <Text
              color={hasTextfieldError ? 'gray/gray400' : 'main_color/blue_p'}
              size={16}
              weight="bold"
              lineHeight="sm"
            >
              닉네임 확인
            </Text>
          </Button>
        )}
      </StyledValidationContainer>
    </StyledTextContainer>
  );
}
