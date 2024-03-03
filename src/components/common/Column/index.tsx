import React, { ReactNode } from 'react';
import StyledColumn from './index.styles';

interface ColumnPropsType {
  children: ReactNode;
}

export default function Column({ children }: ColumnPropsType) {
  return <StyledColumn>{children}</StyledColumn>;
}
