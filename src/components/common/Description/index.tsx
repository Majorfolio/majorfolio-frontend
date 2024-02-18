import React from 'react';
import DescriptionContainer from './index.styles';
import Text from '../Text';

interface DescriptionType {
  normalText: string;
  boldText: string;
}

export default function Description({ normalText, boldText }: DescriptionType) {
  return (
    <DescriptionContainer>
      <Text as="div" size={22} lineHeight="lg">
        {normalText}
      </Text>
      <Text as="div" size={22} weight="bold" lineHeight="lg">
        {boldText}
      </Text>
    </DescriptionContainer>
  );
}
