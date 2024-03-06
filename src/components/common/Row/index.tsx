import React, { ReactNode } from 'react';
import {
  StyledCenteredRow,
  StyledGappedRow,
  StyledSpacedRow,
} from './index.styles';

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

export function CenteredRow({ children, ...props }: RowPropsType) {
  return <StyledCenteredRow {...props}>{children}</StyledCenteredRow>;
}
