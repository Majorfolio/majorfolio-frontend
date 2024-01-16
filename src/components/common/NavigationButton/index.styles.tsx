import { styled } from 'styled-components';
import theme from '../theme';
import { NavigationButtonPropsTypes } from './index.types';

export const StyledNavigationButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 6px;
  align-items: center;
  background-color: ${`${theme.color['gray/white']}`};
  border: 0;
`;

export const StyledIconContainer = styled.div<
  Pick<Required<NavigationButtonPropsTypes>, 'backgroundColor'>
>`
  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => theme.color[props.backgroundColor]};
  border-radius: 100%;
`;

export default StyledNavigationButton;
