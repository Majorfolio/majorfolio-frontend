import React, { ReactNode } from 'react';
import {
  ErrorDefaultIcon,
  HelperCancelIcon,
  HelperCheckIcon,
  HelperDefaultIcon,
  HelperInfoIcon,
} from '../../../assets/icons';
import Text from '../Text';
import StyledHelperText from './index.styles';

interface DetailedTextPropsType {
  children: ReactNode;
}

interface HelperTextPropsType {
  children: ReactNode;
  type?: 'info' | 'default' | 'checked' | 'error';
}

function InfoHelperText({ children }: DetailedTextPropsType) {
  return (
    <>
      <HelperInfoIcon />
      <Text size={12} color="gray/gray200" lineHeight="lg">
        {children}
      </Text>
    </>
  );
}

function DefaultHelperText({ children }: DetailedTextPropsType) {
  return (
    <>
      <HelperDefaultIcon />
      <Text size={12} color="gray/gray200" lineHeight="lg">
        {children}
      </Text>
    </>
  );
}

function CheckedHelperText({ children }: DetailedTextPropsType) {
  return (
    <>
      <HelperCheckIcon />
      <Text size={12} color="main_color/blue_p" lineHeight="lg">
        {children}
      </Text>
    </>
  );
}

function ErrorHelperText({ children }: DetailedTextPropsType) {
  return (
    <>
      <HelperCancelIcon />
      <Text size={12} color="error/error_color" lineHeight="lg">
        {children}
      </Text>
    </>
  );
}

export default function HelperText({ children, type }: HelperTextPropsType) {
  if (type === 'info') {
    return (
      <StyledHelperText>
        <InfoHelperText>{children}</InfoHelperText>
      </StyledHelperText>
    );
  }
  if (type === 'default') {
    return (
      <StyledHelperText>
        <DefaultHelperText>{children}</DefaultHelperText>
      </StyledHelperText>
    );
  }
  if (type === 'checked') {
    return (
      <StyledHelperText>
        <CheckedHelperText>{children}</CheckedHelperText>
      </StyledHelperText>
    );
  }
  if (type === 'error') {
    return (
      <StyledHelperText>
        <ErrorHelperText>{children}</ErrorHelperText>
      </StyledHelperText>
    );
  }
  return (
    <StyledHelperText>
      <InfoHelperText>{children}</InfoHelperText>
    </StyledHelperText>
  );
}
