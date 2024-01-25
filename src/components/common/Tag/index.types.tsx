import { TextPropsType } from '../Text/index.types';
import { ColorType } from '../theme';

export type TagPropsType = TextPropsType & {
  type: 'lg' | 'sm';
  backgroundColor: ColorType;
};
