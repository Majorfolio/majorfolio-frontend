import React from 'react';
import StyledText from './index.styles';
import { TextPropsType } from './index.types';
import theme from '../theme';

export default function Text({
  children,
  color = 'gray/black',
  size = 16,
  weight = 'md',
  lineHeight = 'md',
  ...props
}: TextPropsType) {
  return (
    <StyledText
      color={color}
      size={size}
      weight={weight}
      lineHeight={lineHeight}
      {...props}
    >
      {children}
    </StyledText>
  );
}
