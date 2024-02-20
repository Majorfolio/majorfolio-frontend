import { ChangeEvent, ComponentPropsWithoutRef, ReactNode } from 'react';

export interface TextboxPropsType extends ComponentPropsWithoutRef<'textarea'> {
  disabled?: boolean;
  active?: boolean;
  placeholder: string;
  icon?: ReactNode;
  text: string;
  hasError?: boolean;
  onTextChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export type StyledTextboxType = Pick<
  TextboxPropsType,
  'disabled' | 'placeholder' | 'hasError'
>;
