import React, { ReactNode } from 'react';
import Column from '../Column';
import StyledContainer from './index.styles';

interface NoMaterialWrapperPropsType {
  children: ReactNode;
}

export default function EmptyMaterialWrapper({
  children,
}: NoMaterialWrapperPropsType) {
  return (
    <StyledContainer align="center" justify="center">
      {children}
    </StyledContainer>
  );
}
