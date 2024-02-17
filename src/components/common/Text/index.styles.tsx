import styled from 'styled-components';
import theme from '../theme';
import { TextPropsType } from './index.types';

export type StyledTextType = Required<TextPropsType>;
export const StyledText = styled.span<StyledTextType>`
  color: ${(props) => theme.color[props.color]};
  font-size: ${(props) => `${props.size}px`};
  font-weight: ${(props) => theme.weight[props.weight]};
  line-height: ${(props) => theme.lineHeight[props.lineHeight]};
  white-space: nowrap;
`;

export default StyledText;
