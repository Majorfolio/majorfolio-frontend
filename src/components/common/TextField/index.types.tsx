import { ComponentPropsWithoutRef, ReactElement } from 'react';
import { ColorType } from '../theme';

export interface TextFieldPropsType extends ComponentPropsWithoutRef<'input'> {
  type: 'text' | 'password' | 'email';
  disabled?: boolean;
  active?: boolean;
  borderColor: ColorType;
  borderColorOnHover: ColorType;
  borderColorOnFocus: ColorType;
  placeholder: string;
  icon: ReactElement;
}

export type StyledTextFieldType = Pick<
  TextFieldPropsType,
  | 'type'
  | 'disabled'
  | 'borderColor'
  | 'borderColorOnHover'
  | 'borderColorOnFocus'
  | 'placeholder'
>;
