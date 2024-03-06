import React, { ReactNode } from 'react';
import { StyledGappedRow, StyledSpacedRow } from './index.styles';

interface RowPropsType {
  children: ReactNode;
}

export default function Row({ children }: RowPropsType) {
  return <StyledSpacedRow>{children}</StyledSpacedRow>;
}

export function GappedRow({
  children,
  ...props
}: RowPropsType & { gap: number }) {
  return <StyledGappedRow {...props}>{children}</StyledGappedRow>;
}
