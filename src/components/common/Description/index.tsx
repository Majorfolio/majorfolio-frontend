import React, { ReactNode } from 'react';
import StyledDescriptionContainer, {
  StyledExpandedDescriptionContainer,
} from './index.styles';
import Text from '../Text';

interface DescriptionPropsType {
  normalText: string;
  boldText: string;
}

export function ExpandedDescription({
  normalText,
  boldText,
}: DescriptionPropsType) {
  return (
    <StyledExpandedDescriptionContainer>
      <Text as="div" size={22} lineHeight="lg">
        {normalText}
      </Text>
      <Text as="div" size={22} weight="bold" lineHeight="lg">
        {boldText}
      </Text>
    </StyledExpandedDescriptionContainer>
  );
}

export default function Description({
  normalText,
  boldText,
}: DescriptionPropsType) {
  return (
    <StyledDescriptionContainer>
      <Text as="div" size={22} lineHeight="lg">
        {normalText}
      </Text>
      <Text as="div" size={22} weight="bold" lineHeight="lg">
        {boldText}
      </Text>
    </StyledDescriptionContainer>
  );
}
