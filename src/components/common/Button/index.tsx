import React from 'react';
import { ColorType } from '../theme';
import ButtonPropsType from './index.types';
import { StyledButton } from './index.styles';

export default function Button({
  children,
  backgroundColor = 'main_color/blue_p',
  isOutlined = false,
}: ButtonPropsType) {
  return (
    <StyledButton
      type="button"
      backgroundColor={backgroundColor}
      isOutlined={isOutlined}
    >
      {children}
    </StyledButton>
  );
}
