import React, { FormEvent } from 'react';
import { StyledTextContainer } from '../../../components/common/HelperText/index.styles';
import Text from '../../../components/common/Text';

interface SignupDetailsStepPropsType {
  onNext: () => void;
}

export default function SignupDetailsStep({
  onNext,
}: SignupDetailsStepPropsType) {
  const handleSubmit = (event: FormEvent) => {};

  return (
    <form method="post" onSubmit={handleSubmit}>
      <StyledTextContainer>
        <Text as="div" size={22} lineHeight="lg">
          내가 다니는 학교의
        </Text>
        <Text as="div" size={22} weight="bold" lineHeight="lg">
          상세 정보를 입력해주세요
        </Text>
      </StyledTextContainer>
      아아
    </form>
  );
}
