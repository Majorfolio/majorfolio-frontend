import React from 'react';
import { ColorType } from '../theme';
import ButtonPropsType from './index.types';
import {
  StyledButton,
  StyledKakaoButton,
  StyledOutlinedButton,
  StyledPrimaryButton,
  StyledSecondaryButton,
} from './index.styles';
import { LoadingIcon } from '../../../assets/icons';

export default function Button({
  children,
  onClick = () => {},
  disabled = false,
  loading = false,
  category = 'primary',
  ...props
}: ButtonPropsType) {
  if (category === 'primary') {
    return (
      <StyledPrimaryButton onClick={onClick} disabled={disabled} {...props}>
        {(loading && <LoadingIcon />) || children}
      </StyledPrimaryButton>
    );
  }
  if (category === 'secondary') {
    return (
      <StyledSecondaryButton onClick={onClick} disabled={disabled} {...props}>
        {(loading && <LoadingIcon />) || children}
      </StyledSecondaryButton>
    );
  }
  if (category === 'outlined') {
    return (
      <StyledOutlinedButton onClick={onClick} disabled={disabled} {...props}>
        {(loading && <LoadingIcon />) || children}
      </StyledOutlinedButton>
    );
  }
  if (category === 'kakaotalk') {
    return (
      <StyledKakaoButton onClick={onClick} disabled={disabled} {...props}>
        {(loading && <LoadingIcon />) || children}
      </StyledKakaoButton>
    );
  }
}
