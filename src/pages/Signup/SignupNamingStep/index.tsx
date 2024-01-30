import React from 'react';
import Text from '../../../components/common/Text';
import { StyledTextContainer } from '../../../components/common/HelperText/index.styles';
import TextField from '../../../components/common/TextField';

export default function SignupNamingStep() {
  const textfieldIcon = (
    <Text size={16} lineHeight="lg" color="gray/gray400">
      0 / 8
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
        borderColor="gray/gray100"
        borderColorOnHover="gray/gray150"
        borderColorOnFocus="main_color/blue_p"
        icon={textfieldIcon}
        placeholder="닉네임"
      />
    </StyledTextContainer>
  );
}
