import React, { ChangeEvent, ComponentPropsWithoutRef, ReactNode } from 'react';
import {
  StyledIconContainer,
  StyledTextbox,
  StyledTextbox2,
  StyledTextboxContainer,
} from './index.styles';
import Text from '../Text';
import { TextFieldPropsType } from '../TextField/index.types';
import { TextboxPropsType } from './index.types';

export default function Textbox({
  disabled = false,
  hasError = false,
  text,
  onTextChange,
  icon,
  ...props
}: TextboxPropsType) {
  return (
    <StyledTextboxContainer>
      <StyledTextbox
        hasError={hasError}
        color="gray/gray900"
        size={16}
        weight="md"
        lineHeight="lg"
        disabled={disabled}
        value={text}
        onChange={onTextChange}
        {...props}
      />
      <StyledIconContainer>{!!icon && icon}</StyledIconContainer>
    </StyledTextboxContainer>
  );
}
