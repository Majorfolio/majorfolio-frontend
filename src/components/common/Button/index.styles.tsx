import styled from 'styled-components';
import ButtonPropsType, { StyledButtonPropsType } from './index.types';
import theme from '../theme';

export const StyledButton = styled.button<Required<StyledButtonPropsType>>`
  display: flex;
  justify-content: center;
  background-color: ${(props) => theme.color[props.backgroundColor]};
  padding: 16px 0 17px 0;
  border: ${(props) => (props.isOutlined ? `1px ${theme.color['main_color/blue_p']} solid;` : 0)};
  border-radius: 6px;
  width: 100%;
`;

export default StyledButton;
