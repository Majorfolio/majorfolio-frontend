import React, { ReactNode } from 'react';
import StyledRow, {
  StyledCenteredRow,
  StyledGappedRow,
  StyledSpacedRow,
} from './index.styles';
import { RowPropsType } from './index.types';

export default function Row({ children, ...props }: RowPropsType) {
  return <StyledRow {...props}>{children}</StyledRow>;
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
