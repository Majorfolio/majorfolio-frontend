import { ComponentPropsWithoutRef, HTMLProps } from 'react';
import { ButtonWidthType, ColorType } from '../theme';

export default interface ButtonPropsType
  extends StyledButtonPropsType,
    ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
}

export interface StyledButtonPropsType {
  disabled?: boolean;
  backgroundColor?: ColorType;
  isOutlined?: boolean;
}
