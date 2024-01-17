import { styled } from 'styled-components';
import theme from '../theme';
import { StyledText } from '../Text/index.styles';
import { TextPropsType } from '../Text/index.types';

const StyledTextField = styled(StyledText).attrs({ as: 'input' })<
  Pick<Required<TextPropsType>, 'color' | 'size' | 'weight' | 'lineHeight'>
>`
  padding: 13px 16px;
  border: none;
  border-radius: 6px;
  background-color: ${theme.color['gray/grayBG']};
  width: 288px;
  border-radius: 6px;
`;

export const StyledButton = styled.button`
  position: absolute;
  border: none;
  padding: 10px;
  background-color: transparent;
  line-height: 0;
  &:hover {
    cursor: pointer;
  }
  right: 0px;
`;

export const StyledContainer = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  box-sizing: content-box;
`;

export default StyledTextField;
