import React from 'react';
import StyledDescriptionContainer, {
  StyledExpandedDescriptionContainer,
} from './index.styles';
import Text from '../Text';

interface DescriptionType {
  normalText: string;
  boldText: string;
}

export function ExpandedDescription({ normalText, boldText }: DescriptionType) {
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

export default function Description({ normalText, boldText }: DescriptionType) {
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
