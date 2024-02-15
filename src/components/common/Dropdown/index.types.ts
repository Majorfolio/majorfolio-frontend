import { ComponentPropsWithRef } from 'react';
import { ColorType } from '../theme';
import { TextPropsType } from '../Text/index.types';

export default interface StyledComboboxType
  extends Omit<TextPropsType, 'children'> {
  borderColor: ColorType;
  borderColorOnFocus: ColorType;
}
