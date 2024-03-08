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
import useCode from './useCode';
import useFormSubmission from '../../../hooks/common/useFormSubmission';

interface SignupPropsType {
  onNext: () => void;
  onPrevious: () => void;
  isEmailConfirmed?: boolean;
}

export default function SignupCodeStep({
  onNext,
  onPrevious,
  isEmailConfirmed = false,
}: SignupPropsType) {
  const { code, onCodeChange, submitCode, isCodeEmpty, serverErrorMessage } =
    useCode();
  const { isSubmitting, handleSubmit } = useFormSubmission(async () => {
    const isSubmissionSuccessful = await submitCode();
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
      <Button category="secondary" type="button" onClick={onPrevious}>
        <Text color="main_color/blue_p" size={16} weight="bold" lineHeight="sm">
          인증번호 재발송
        </Text>
      </Button>
      <Button category="primary" disabled={isCodeEmpty || isSubmitting}>
        <Text color="gray/grayBG" size={16} weight="bold" lineHeight="sm">
          다음으로
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
    <CancelDefaultIcon />
  );

  const helperText = serverErrorMessage ? (
    <HelperText type="error">{serverErrorMessage}</HelperText>
  ) : (
    <HelperText>메일주소로 보내드린 인증코드를 확인해보세요.</HelperText>
  );
  return (
    <form onSubmit={handleSubmit}>
      <StyledTextContainer htmlFor="text">
        <Text as="div" size={22} lineHeight="lg">
          학교 인증을 위해
        </Text>
        <Text as="div" size={22} weight="bold" lineHeight="lg">
          인증코드를 입력해주세요
        </Text>
      </StyledTextContainer>
      <TextField
        id="text"
        type="text"
        icon={serverErrorMessage ? <ErrorDefaultIcon /> : textfieldIcon}
        placeholder="인증코드"
        text={code}
        onTextChange={onCodeChange}
        hasError={!!serverErrorMessage}
      />
      {helperText}
      <StyledButtonContainer>{transition}</StyledButtonContainer>
    </form>
  );
}
