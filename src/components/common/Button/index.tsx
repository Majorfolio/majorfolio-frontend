import React, {
  useState,
  MouseEvent,
  ComponentPropsWithoutRef,
  ReactNode,
} from 'react';
import { ColorType } from '../theme';
import ButtonPropsType from './index.types';
import {
  StyledButton,
  StyledKakaoButton,
  StyledOutlinedButton,
  StyledPrimaryButton,
  StyledSecondaryButton,
} from './index.styles';
import { KakaoIcon, LoadingIcon } from '../../../assets/icons';
import Text from '../Text';

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

export function SubmitButton({
  onClick,
  disabled = false,
  ...props
}: ButtonPropsType) {
  const [disabledByClick, setDisabledByClick] = useState(false);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
    setDisabledByClick(true);
  };

  return (
    <Button
      disabled={disabled || disabledByClick}
      onClick={() => {}}
      {...props}
    />
  );
}

export function KakaoButton({
  children,
  onClick = () => {},
  disabled = false,
  loading = false,
  ...props
}: Omit<ButtonPropsType, 'category'>) {
  return (
    <StyledKakaoButton onClick={onClick} disabled={disabled} {...props}>
      {(loading && <LoadingIcon />) || (
        <>
          <KakaoIcon />
          <Text color="gray/black" weight="bold" lineHeight="sm" size={16}>
            {children}
          </Text>
        </>
      )}
    </StyledKakaoButton>
  );
}
