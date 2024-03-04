import React, { ChangeEvent, useState } from 'react';
import Text from '../../../components/common/Text';
import { StyledTextContainer } from '../../../components/common/HelperText/index.styles';
import TextField from '../../../components/common/TextField';
import HelperText from '../../../components/common/HelperText';
import { ErrorDefaultIcon } from '../../../assets/icons';
import Button from '../../../components/common/Button';
import StyledValidationContainer from './index.styles';
import useSignupNaming from './useSignupNaming';
import userStore from '../../../store/userStore';
import { signup } from '../../../apis/member';
import useAuthStore from '../../../store/useAuthStore';

interface SignupNamingStepType {
  onNext: () => void;
}

const NICKNAME_MIN_LENGTH = 2;
const NICKNAME_MAX_LENGTH = 8;
const HELPER_TEXT = {
  NONCOMPLIANT: '2~8자의 영어 또는 한글로 입력해주세요.',
  ALREADY_IN_USE: '이미 사용중인 닉네임이에요',
  PREVIOUS_NAME: '기존 닉네임과 같아요',
  SUCCESS: '사용 가능한 닉네임입니다',
};

const KoreanEnglishAlphabetRegex = /^[가-힣a-zA-Z]+$/;

export default function SignupNamingStep({ onNext }: SignupNamingStepType) {
  const {
    hasTextfieldError,
    onNicknameChange,
    helperText,
    hasTextfieldContent,
    hasNicknameValidCharacters,
    isNicknameValid,
    validateNickname,
    nickname,
  } = useSignupNaming();
  const updateNickname = userStore((state) => state.updateNickname);

  const textfieldIcon =
    hasTextfieldContent && !hasNicknameValidCharacters ? (
      <ErrorDefaultIcon />
    ) : (
      <Text size={16} lineHeight="lg" color="gray/gray400">
        {nickname.length} / {NICKNAME_MAX_LENGTH}
      </Text>
    );

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
        hasError={hasTextfieldContent && !hasNicknameValidCharacters}
        icon={textfieldIcon}
        placeholder="닉네임"
        text={nickname}
        onTextChange={onNicknameChange}
      />
      {hasTextfieldContent && hasNicknameValidCharacters && (
        <HelperText type="checked">{helperText}</HelperText>
      )}
      {hasTextfieldContent && !hasNicknameValidCharacters && (
        <HelperText type="error">{helperText}</HelperText>
      )}
      <StyledValidationContainer>
        {isNicknameValid ? (
          <Button
            category="primary"
            onClick={async () => {
              updateNickname(nickname);
              onNext();
            }}
          >
            <Text color="gray/white" size={16} weight="bold" lineHeight="sm">
              다음으로
            </Text>
          </Button>
        ) : (
          <Button
            category="secondary"
            disabled={!hasNicknameValidCharacters}
            onClick={validateNickname}
          >
            <Text
              color={
                !hasNicknameValidCharacters
                  ? 'gray/gray400'
                  : 'main_color/blue_p'
              }
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
