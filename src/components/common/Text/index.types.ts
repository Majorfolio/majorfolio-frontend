import { ColorType, LineHeightType, SizeType, WeightType } from '../theme';

export interface TextPropsType {
  children: React.ReactNode;
  color?: ColorType;
  size?: SizeType;
  weight?: WeightType;
  lineHeight?: LineHeightType;
}
