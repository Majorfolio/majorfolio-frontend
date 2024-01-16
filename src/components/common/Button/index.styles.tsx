import styled from 'styled-components';
import ButtonPropsType from './index.types';
import theme from '../theme';

export const StyledButton = styled.button<Required<ButtonPropsType>>`
  display: flex;
  justify-content: center;
  background-color: ${(props) => theme.color[props.backgroundColor]};
  padding: 16px 0 17px 0;
  border: ${(props) => (props.isOutlined ? `1px #4340DB solid;` : 0)};
  border-radius: 6px;
  width: ${(props) => `${theme.buttonWidth[props.width]}px`};
`;

export default StyledButton;
