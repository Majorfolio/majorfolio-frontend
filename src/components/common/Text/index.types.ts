import { ColorType, LineHeightType, WeightType } from '../theme';

export interface TextPropsType {
  children: React.ReactNode;
  color: ColorType;
  size: number;
  weight: WeightType;
  lineHeight: LineHeightType;
}
