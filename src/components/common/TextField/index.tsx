import React, { ReactElement, useState } from 'react';
import StyledTextField, { StyledButton, StyledContainer } from './index.styles';
import { CancelDefaultIcon, VisibilityOffIcon } from '../../../assets/icons';
import Button from '../Button';
import { ColorType } from '../theme';

interface TextFieldPropsType {
  type: 'text' | 'password' | 'email';
  disabled?: boolean;
  active?: boolean;
  borderColor: ColorType;
  borderColorOnHover: ColorType;
  borderColorOnFocus: ColorType;
  placeholder: string;
  icon: ReactElement;
  id: string;
}

export default function TextField({
  type = 'text',
  disabled = false,
  active = true,
  icon,
  placeholder,
  ...props
}: TextFieldPropsType) {
  const [email, setEmail] = useState('');
  switch (type) {
    case 'text':
      return (
        <StyledContainer>
          <StyledTextField
            type="text"
            placeholder={placeholder}
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
            placeholder={placeholder}
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
            placeholder={placeholder}
            color="gray/gray900"
            size={16}
            weight="md"
            lineHeight="lg"
            disabled={disabled}
            name="email"
            value={email}
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
