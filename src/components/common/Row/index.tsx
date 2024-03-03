import React, { ReactNode } from 'react';
import StyledRow from './index.styles';

interface RowPropsType {
  children: ReactNode;
}

export default function Row({ children }: RowPropsType) {
  return <StyledRow>{children}</StyledRow>;
}
