import { ReactNode } from 'react';
import { ColorType } from '../theme';

export interface RowPropsType {
  children: ReactNode;
  justify?: 'start' | 'center' | 'end' | 'space-between';
  align?: 'start' | 'center' | 'end' | 'baseline';
  gap?: number;
  width?: number;
  height?: number;
  radius?: number;
  background?: ColorType;
  margin?: string;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  padding?: string;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
}
