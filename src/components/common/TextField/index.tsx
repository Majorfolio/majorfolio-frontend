import React from 'react';
import StyledTextField, { StyledButton, StyledContainer } from './index.styles';
import { CancelDefaultIcon, VisibilityOffIcon } from '../../../assets/icons';
import Button from '../Button';

interface TextFieldPropsType {
  type: 'title' | 'password';
  disabled?: boolean;
  active?: boolean;
}

export default function TextField({
  type = 'title',
  disabled = false,
  active = true,
}: TextFieldPropsType) {
  switch (type) {
    case 'title':
      return (
        <StyledContainer>
          <StyledTextField
            type="text"
            placeholder="제목"
            color="gray/gray400"
            size={16}
            weight="md"
            lineHeight="lg"
            disabled={disabled}
          />
          {!disabled && (
            <StyledButton type="button">
              <CancelDefaultIcon />
            </StyledButton>
          )}
        </StyledContainer>
      );
    case 'password':
      return (
        <StyledContainer>
          <StyledTextField
            type="password"
            placeholder="비밀번호"
            color="gray/gray400"
            size={16}
            weight="md"
            lineHeight="lg"
            disabled={disabled}
          />
          {!disabled && active && (
            <StyledButton type="button">
              <VisibilityOffIcon />
            </StyledButton>
          )}
        </StyledContainer>
      );
    default:
      return <input type="text" placeholder="제목" />;
  }
}
