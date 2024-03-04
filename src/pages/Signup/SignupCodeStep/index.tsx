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
import { CancelDefaultIcon } from '../../../assets/icons';
import Tag from '../../../components/common/Tag';
import useCode from './useCode';

interface SignupPropsType {
  onNext: () => void;
  isEmailConfirmed?: boolean;
}

export default function SignupCodeStep({
  onNext,
  isEmailConfirmed = false,
}: SignupPropsType) {
  const { code, onCodeChange, onCodeSubmit, isCodeEmpty } = useCode();
  const navigate = useNavigate();

  const transition = isEmailConfirmed ? (
    <Button type="submit" category="primary">
      <Text color="gray/white" size={16} weight="bold" lineHeight="sm">
        다음으로
      </Text>
    </Button>
  ) : (
    <>
      <Button
        category="secondary"
        type="button"
        onClick={() => {
          navigate(-1);
        }}
      >
        <Text color="main_color/blue_p" size={16} weight="bold" lineHeight="sm">
          인증번호 재발송
        </Text>
      </Button>
      {isCodeEmpty ? (
        <Button category="primary">
          <Text color="gray/grayBG" size={16} weight="bold" lineHeight="sm">
            다음으로
          </Text>
        </Button>
      ) : (
        <Button category="primary" disabled>
          <Text color="gray/gray400" size={16} weight="bold" lineHeight="sm">
            다음으로
          </Text>
        </Button>
      )}
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

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        await onCodeSubmit();
        onNext();
      }}
    >
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
        icon={textfieldIcon}
        placeholder="인증코드"
        text={code}
        onTextChange={onCodeChange}
      />
      <HelperText>메일주소로 보내드린 인증코드를 확인해보세요.</HelperText>
      <StyledButtonContainer>{transition}</StyledButtonContainer>
    </form>
  );
}
