import { styled } from 'styled-components';
import { TagPropsType } from './index.types';
import theme from '../theme';
import Text from '../Text';
import { TextPropsType } from '../Text/index.types';

export const StyledLargeTag = styled(Text)<TagPropsType>`
  background-color: ${(props) => theme.color[props.backgroundColor]};
  padding: 4px 8px;
  border-radius: 4px;
`;

export const StyledSmallTag = styled(Text)<TagPropsType>`
  background-color: ${(props) => theme.color[props.backgroundColor]};
  padding: 2px 6px 3px 6px;
  border-radius: 2px;
`;
