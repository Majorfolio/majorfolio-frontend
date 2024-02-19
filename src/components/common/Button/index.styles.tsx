import styled from 'styled-components';
import ButtonPropsType, { StyledButtonPropsType } from './index.types';
import theme from '../theme';
import Text from '../Text';
import { StyledText } from '../Text/index.styles';

export const StyledButton = styled.button<Required<StyledButtonPropsType>>`
  display: flex;
  justify-content: center;
  background-color: ${({ disabled, backgroundColor }) =>
    disabled ? theme.color['gray/gray100'] : theme.color[backgroundColor]};
  padding: 16px 0 17px 0;
  border: ${(props) =>
    props.isOutlined ? `1px ${theme.color['main_color/blue_p']} solid;` : 0};
  border-radius: 6px;
  width: 100%;
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
`;

export default StyledButton;
