import React from 'react';
import { ColorType } from '../theme';
import ButtonPropsType from './index.types';
import { StyledButton } from './index.styles';

export default function Button({
  children,
  backgroundColor = 'main_color/blue_p',
  isOutlined = false,
  onClick = () => {},
  disabled = false,
  ...props
}: ButtonPropsType) {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      isOutlined={isOutlined}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </StyledButton>
  );
}
