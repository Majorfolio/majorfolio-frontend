import React, { ReactNode } from 'react';
import { HelperInfoIcon } from '../../../assets/icons';
import Text from '../Text';
import StyledHelperText from './index.styles';

interface HelperTextPropsType {
  children: ReactNode;
}

export default function HelperText({ children }: HelperTextPropsType) {
  return (
    <StyledHelperText>
      <HelperInfoIcon />
      <Text size={12} color="gray/gray200" lineHeight="lg">
        {children}
      </Text>
    </StyledHelperText>
  );
}
