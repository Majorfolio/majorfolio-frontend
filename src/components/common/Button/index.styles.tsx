import styled from 'styled-components';
import ButtonPropsType, { StyledButtonPropsType } from './index.types';
import theme from '../theme';
import Text from '../Text';
import { StyledText } from '../Text/index.styles';
import { LoadingIcon } from '../../../assets/icons';

export const StyledButton = styled.button<Required<StyledButtonPropsType>>`
  display: flex;
  justify-content: center;
  padding: 16px 0 17px 0;
  border-radius: 6px;
  width: 100%;
  border-width: 0;
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};

  &&:disabled {
    background-color: ${theme.color['gray/gray100']};
  }

  &&:disabled ${StyledText} {
    color: ${theme.color['gray/gray400']};
  }
  outline: none;
`;

export const StyledPrimaryButton = styled(StyledButton)`
  && {
    background-color: ${theme.color['main_color/blue_p']};
  }

  && ${StyledText} {
    color: ${theme.color['gray/white']};
  }

  && ${LoadingIcon} {
    color: ${theme.color['gray/white']};
  }

  &&:hover {
    background-color: ${({ disabled }) =>
      disabled
        ? theme.color['gray/gray100']
        : theme.color['main_color/blue_s']};
  }
`;

export const StyledSecondaryButton = styled(StyledButton)`
  && {
    background-color: ${theme.color['sub_color/indigo/c']};
  }

  && ${StyledText} {
    color: ${theme.color['main_color/blue_p']};
  }

  && ${LoadingIcon} {
    color: ${theme.color['main_color/blue_p']};
  }

  &&:hover {
    background-color: ${({ disabled }) =>
      disabled
        ? theme.color['gray/gray100']
        : theme.color['sub_color/indigo/h']};
  }
`;

export const StyledOutlinedButton = styled(StyledButton)`
  && {
    background-color: ${theme.color['gray/grayBG']};
    border: 1px solid ${theme.color['main_color/blue_p']};
  }

  && ${StyledText} {
    color: ${theme.color['main_color/blue_p']};
  }

  && ${LoadingIcon} {
    color: ${theme.color['main_color/blue_p']};
  }
`;

export const StyledKakaoButton = styled(StyledButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  background-color: ${theme.color.kakaotalk};

  && ${StyledText} {
    color: ${theme.color['gray/black']};
  }

  && ${LoadingIcon} {
    color: ${theme.color['gray/black']};
  }
`;

export default StyledButton;
