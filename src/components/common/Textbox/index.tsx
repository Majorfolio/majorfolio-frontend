import React, { ChangeEvent, ComponentPropsWithoutRef, ReactNode } from 'react';
import { StyledTextbox, StyledTextbox2 } from './index.styles';
import Text from '../Text';
import { TextFieldPropsType } from '../TextField/index.types';
import { TextboxPropsType } from './index.types';

export default function Textbox({
  disabled = false,
  hasError = false,
  text,
  onTextChange,
  ...props
}: TextboxPropsType) {
  return (
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
  );
}
