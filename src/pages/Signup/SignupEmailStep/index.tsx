import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Text from '../../../components/common/Text';
import TextField from '../../../components/common/TextField';
import HelperText from '../../../components/common/HelperText';
import StyledSignupEmailStep from './index.styles';
import {
  StyledButtonContainer,
  StyledTextContainer,
} from '../../../components/common/HelperText/index.styles';
import Button from '../../../components/common/Button';
import { CancelDefaultIcon, ErrorDefaultIcon } from '../../../assets/icons';
import Tag from '../../../components/common/Tag';
import useEmail from './useEmail';
import useFormSubmission from '../../../hooks/common/useFormSubmission';

interface SignupPropsType {
  onNext: () => void;
  isEmailConfirmed?: boolean;
}

export default function SignupEmailStep({
  onNext,
  isEmailConfirmed = false,
}: SignupPropsType) {
  const {
    email,
    onEmailChange,
    isEmailValid,
    submitEmail,
    resetEmail,
    serverErrorMessage,
  } = useEmail();
  const navigate = useNavigate();
  const { isSubmitting, handleSubmit } = useFormSubmission(async () => {
    const isSubmissionSuccessful = await submitEmail();
    if (isSubmissionSuccessful) {
      onNext();
    }
  });

  const transition = isEmailConfirmed ? (
    <Button type="submit" category="primary">
      <Text color="gray/white" size={16} weight="bold" lineHeight="sm">
        다음으로
      </Text>
    </Button>
  ) : (
    <>
      <Button type="button" category="secondary" onClick={() => navigate('/')}>
        <Text color="main_color/blue_p" size={16} weight="bold" lineHeight="sm">
          다음에 하기
        </Text>
      </Button>
      <Button
        type="submit"
        category="primary"
        disabled={!isEmailValid || isSubmitting || Boolean(serverErrorMessage)}
      >
        <Text color="gray/gray400" size={16} weight="bold" lineHeight="sm">
          인증메일 전송
        </Text>
      </Button>
    </>
  );

  const textfieldIcon = isEmailConfirmed ? (
    <Tag
      type="lg"
      size={12}
      weight="bold"
      lineHeight="sm"
      color="sub_color/indigo/p"
      backgroundColor="sub_color/indigo/c"
    >
      인증됨
    </Tag>
  ) : (
    <button type="button" onClick={resetEmail} aria-label="deleteAll">
      <CancelDefaultIcon />
    </button>
  );

  const helperText = serverErrorMessage ? (
    <HelperText type="error">{serverErrorMessage}</HelperText>
  ) : (
    <HelperText type="info">해당 메일주소로 메일을 보내드립니다.</HelperText>
  );

  return (
    <form onSubmit={handleSubmit}>
      <StyledTextContainer htmlFor="email">
        <Text as="div" size={22} lineHeight="lg">
          학교 인증을 위해
        </Text>
        <Text as="div" size={22} weight="bold" lineHeight="lg">
          학교 이메일을 입력해주세요
        </Text>
      </StyledTextContainer>
      <TextField
        id="email"
        type="email"
        icon={
          email && (!isEmailValid || Boolean(serverErrorMessage)) ? (
            <ErrorDefaultIcon />
          ) : (
            textfieldIcon
          )
        }
        placeholder="이메일"
        text={email}
        onTextChange={onEmailChange}
        hasError={!!email && (!isEmailValid || Boolean(serverErrorMessage))}
      />
      {helperText}
      <StyledButtonContainer>{transition}</StyledButtonContainer>
    </form>
  );
}
