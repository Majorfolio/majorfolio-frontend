import React, { ReactNode } from 'react';
import StyledColumn from './index.styles';
import { ColumnPropsType } from './index.types';

export default function Column({ children, ...props }: ColumnPropsType) {
  return <StyledColumn {...props}>{children}</StyledColumn>;
}
