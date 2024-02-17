import React, { ReactNode } from 'react';
import Text from '../Text';
import { StyledItemContainer, StyledSectionContainer } from './index.styles';

interface UploadSectionType {
  title: ReactNode;
  items?: Array<ReactNode>;
}

export default function UploadSection({ title, items }: UploadSectionType) {
  const wrappedItems = items?.map((item) => (
    <StyledItemContainer>{item}</StyledItemContainer>
  ));
  return (
    <StyledSectionContainer>
      {title}
      {wrappedItems}
    </StyledSectionContainer>
  );
}
