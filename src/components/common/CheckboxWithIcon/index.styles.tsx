import { styled } from 'styled-components';
import theme from '../theme';

const StyledCheckbox = styled.label`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  width: 100%;
  cursor: pointer;

  && input[type='checkbox'] {
    display: none;
  }
  /* && input[type='checkbox']:checked + div:first-child {
    color: ${theme.color['gray/gray900']};
  } */
`;

export const StyledIconContainer = styled.div``;

export default StyledCheckbox;
