import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import StyledRowButton, { StyledNextIcon } from './index.styles';
import Text from '../Text';

interface RowButtonPropsType extends ComponentPropsWithoutRef<'button'> {
  text: string;
}

export default function RowButton({
  text,
  onClick,
  ...props
}: RowButtonPropsType) {
  return (
    <StyledRowButton type="button" onClick={onClick} {...props}>
      <Text color="gray/gray900" size={16}>
        {text}
      </Text>
      <StyledNextIcon />
    </StyledRowButton>
  );
}
