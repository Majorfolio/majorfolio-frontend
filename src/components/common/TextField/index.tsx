import React, { ReactElement, useState } from 'react';
import StyledTextField, { StyledButton, StyledContainer } from './index.styles';
import { CancelDefaultIcon, VisibilityOffIcon } from '../../../assets/icons';
import Button from '../Button';
import { ColorType } from '../theme';

interface TextFieldPropsType {
  type: 'title' | 'password' | 'email';
  disabled?: boolean;
  active?: boolean;
  borderColor: ColorType;
  borderColorOnHover: ColorType;
  borderColorOnFocus: ColorType;
  icon: ReactElement;
}

export default function TextField({
  type = 'title',
  disabled = false,
  active = true,
  icon,
  ...props
}: TextFieldPropsType) {
  const [email, setEmail] = useState('');
  switch (type) {
    case 'title':
      return (
        <StyledContainer>
          <StyledTextField
            type="text"
            placeholder="제목"
            color="gray/gray900"
            size={16}
            weight="md"
            lineHeight="lg"
            disabled={disabled}
            {...props}
          />
          {!disabled && <StyledButton type="button">{icon}</StyledButton>}
        </StyledContainer>
      );
    case 'password':
      return (
        <StyledContainer>
          <StyledTextField
            type="password"
            placeholder="비밀번호"
            color="gray/gray900"
            size={16}
            weight="md"
            lineHeight="lg"
            disabled={disabled}
            {...props}
          />
          {!disabled && active && (
            <StyledButton type="button">{icon}</StyledButton>
          )}
        </StyledContainer>
      );
    case 'email':
      return (
        <StyledContainer>
          <StyledTextField
            type="email"
            placeholder="이메일"
            color="gray/gray900"
            size={16}
            weight="md"
            lineHeight="lg"
            disabled={disabled}
            onChange={(event) => setEmail(event.target.value)}
            {...props}
          />
          <StyledButton type="button">{icon}</StyledButton>
        </StyledContainer>
      );
    default:
      return <input type="text" placeholder="제목" />;
  }
}
