import React from 'react';
import { StyledText } from './index.styles';
import { TextPropsType } from './index.types';

export default function Text({ children, ...props }: TextPropsType) {
  return <StyledText {...props}>{children}</StyledText>;
}
