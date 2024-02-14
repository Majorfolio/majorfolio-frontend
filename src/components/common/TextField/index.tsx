import React, { ComponentPropsWithoutRef, ReactElement, useState } from 'react';
import StyledTextField, { StyledButton, StyledContainer } from './index.styles';
import { CancelDefaultIcon, VisibilityOffIcon } from '../../../assets/icons';
import Button from '../Button';
import { ColorType, SizeType } from '../theme';
import { TextFieldPropsType } from './index.types';

export default function TextField({
  type = 'text',
  disabled = false,
  active = true,
  icon,
  placeholder,
  text,
  onTextChange,
  ...props
}: TextFieldPropsType) {
  return (
    <StyledContainer>
      <StyledTextField
        type={type}
        placeholder={placeholder}
        color="gray/gray900"
        size={16}
        weight="md"
        lineHeight="lg"
        disabled={disabled}
        name={type}
        value={text}
        onChange={onTextChange}
        {...props}
      />
      <StyledButton type="button">{icon}</StyledButton>
    </StyledContainer>
  );
}
