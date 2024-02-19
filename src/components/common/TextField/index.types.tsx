import { ChangeEvent, ComponentPropsWithoutRef, ReactElement } from 'react';
import { ColorType } from '../theme';

export interface TextFieldPropsType extends ComponentPropsWithoutRef<'input'> {
  disabled?: boolean;
  active?: boolean;
  placeholder: string;
  icon?: ReactElement;
  text: string;
  hasError?: boolean;
  onTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export type StyledTextFieldType = Pick<
  TextFieldPropsType,
  'type' | 'disabled' | 'placeholder' | 'hasError'
>;
