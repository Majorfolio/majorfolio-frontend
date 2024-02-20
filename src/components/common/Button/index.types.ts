import { ComponentPropsWithoutRef, HTMLProps } from 'react';
import { ButtonWidthType, ColorType } from '../theme';

export default interface ButtonPropsType
  extends StyledButtonPropsType,
    ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  loading?: boolean;
  category?: 'primary' | 'secondary' | 'outlined' | 'kakaotalk';
}

export interface StyledButtonPropsType {
  disabled?: boolean;
}
