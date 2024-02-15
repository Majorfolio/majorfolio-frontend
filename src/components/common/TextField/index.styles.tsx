import { styled } from 'styled-components';
import theme, { ColorType } from '../theme';
import StyledText from '../Text/index.styles';
import { TextPropsType } from '../Text/index.types';

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  box-sizing: content-box;
`;

const StyledTextField = styled(StyledText).attrs({ as: 'input' })<
  Pick<Required<TextPropsType>, 'color' | 'size' | 'weight' | 'lineHeight'>
>`
  padding: 13px 16px;
  border: 1px solid ${theme.color['gray/gray100']};
  &&::placeholder {
    color: ${theme.color['gray/gray400']};
  }
  &&:hover {
    border: 1px solid ${theme.color['gray/gray150']};
  }
  &&:focus {
    border: 1px solid ${theme.color['main_color/blue_p']};
  }
  &&:disabled {
    border: 1px solid ${theme.color['gray/gray150']};
    background-color: ${theme.color['gray/gray100']};
  }
  &&:invalid {
    border: 1px solid ${theme.color['error/error_color']};
  }
  outline: none;
  background-color: ${theme.color['gray/grayBG']};
  width: 100%;
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

export default StyledTextField;
