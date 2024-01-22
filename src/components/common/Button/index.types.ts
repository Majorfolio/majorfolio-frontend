import { ComponentPropsWithoutRef, HTMLProps } from 'react';
import { ButtonWidthType, ColorType } from '../theme';

export default interface ButtonPropsType
  extends StyledButtonPropsType,
    ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  onClick?: () => void;
}

export interface StyledButtonPropsType {
  backgroundColor?: ColorType;
  isOutlined?: boolean;
}
