import { styled } from 'styled-components';
import TextField from '../TextField';
import StyledTextField from '../TextField/index.styles';
import { StyledTextFieldType } from '../TextField/index.types';
import StyledText from '../Text/index.styles';
import theme from '../theme';
import { StyledTextboxType } from './index.types';

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
`;

export const StyledTextbox = styled(StyledText).attrs({ as: 'textarea' })<
  Required<StyledTextboxType>
>`
  width: 100%;
  height: 132px;
  box-sizing: border-box;
  padding: 13px 16px;
  border: 1px solid #ccc;
  resize: none;
  outline: none;
  border-radius: 6px;
  border: 1px solid
    ${({ hasError }) =>
      !hasError
        ? theme.color['gray/gray100']
        : theme.color['error/error_color']};
  &&::placeholder {
    color: ${theme.color['gray/gray400']};
  }
  &&:hover {
    border: 1px solid
      ${({ hasError }) =>
        !hasError
          ? theme.color['gray/gray150']
          : theme.color['error/error_color']};
  }
  &&:focus {
    border: 1px solid
      ${({ hasError }) =>
        !hasError
          ? theme.color['main_color/blue_p']
          : theme.color['error/error_color']};
  }
  &&:disabled {
    border: 1px solid ${theme.color['gray/gray150']};
    background-color: ${theme.color['gray/gray100']};
  }

  outline: none;
  background-color: ${theme.color['gray/grayBG']};
`;

export const StyledTextbox2 = styled.textarea<Required<StyledTextboxType>>`
  width: 100%;
  height: 104px;
  box-sizing: border-box;
  padding: 13px 16px;
  border: 1px solid #ccc;
  resize: none;
  outline: none;
  border-radius: 6px;
  border: 1px solid
    ${({ hasError }) =>
      !hasError
        ? theme.color['gray/gray100']
        : theme.color['error/error_color']};
  &&::placeholder {
    color: ${theme.color['gray/gray400']};
  }
  &&:hover {
    border: 1px solid
      ${({ hasError }) =>
        !hasError
          ? theme.color['gray/gray150']
          : theme.color['error/error_color']};
  }
  &&:focus {
    border: 1px solid
      ${({ hasError }) =>
        !hasError
          ? theme.color['main_color/blue_p']
          : theme.color['error/error_color']};
  }
  &&:disabled {
    border: 1px solid ${theme.color['gray/gray150']};
    background-color: ${theme.color['gray/gray100']};
  }

  outline: none;
  background-color: ${theme.color['gray/grayBG']};
`;

export default StyledTextField;
