import React from 'react';
import { TextPropsType } from '../Text/index.types';
import { ColorType } from '../theme';
import { TagPropsType } from './index.types';
import { StyledLargeTag, StyledSmallTag } from './index.styles';

export default function Tag({ children, type, ...props }: TagPropsType) {
  if (type === 'lg') {
    return <StyledLargeTag {...props}>{children}</StyledLargeTag>;
  }
  if (type === 'sm') {
    return <StyledSmallTag {...props}>{children}</StyledSmallTag>;
  }
  throw new Error('type not defined');
}
