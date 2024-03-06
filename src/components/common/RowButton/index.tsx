import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import StyledRowButton, { StyledNextIcon } from './index.styles';
import Text from '../Text';
import { GappedRow } from '../Row';

interface RowButtonPropsType extends ComponentPropsWithoutRef<'button'> {
  text: string;
  tag?: ReactNode;
}

export default function RowButton({
  tag,
  text,
  onClick,
  ...props
}: RowButtonPropsType) {
  return (
    <StyledRowButton type="button" onClick={onClick} {...props}>
      <GappedRow gap={8}>
        {tag}
        <Text color="gray/gray900" size={16}>
          {text}
        </Text>
      </GappedRow>
      <StyledNextIcon />
    </StyledRowButton>
  );
}
