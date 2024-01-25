import { styled } from 'styled-components';
import theme from '../theme';
import Text from '../Text';
import Button from '../Button';

export const StyledDropdownContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledCombobox = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 52px;
  padding-left: 13px;
  border: 1px ${theme.color['gray/gray100']} solid;
  border-radius: 6px;
  background-color: ${theme.color['gray/white']};
  cursor: pointer;
  /* margin-left: 20px; */
  /* margin-right: 20px; */

  &:focus {
    border: 1px ${theme.color['main_color/blue_p']} solid;
  }
`;

export const StyledDropdownIcon = styled.span`
  padding: 10px;
  height: 24px;
`;

export const StyledListbox = styled.ul`
  position: absolute;
  width: 100%;
  box-shadow: 0px 0px 16px rgba(35, 38, 41, 0.04);
  background-color: ${theme.color['gray/white']};
  border: 1px solid ${theme.color['gray/gray100']};
  border-radius: 6px;
  margin-top: 4px;
  max-height: 200px;
  overflow-y: auto;

  & li {
    cursor: pointer;
    display: flex;
    width: 100%;
    justify-content: start;
  }

  & li:hover {
    background-color: ${theme.color['gray/gray50']};
  }

  & li label {
    padding: 13px 0 13px 16px;
    width: 100%;
    position: relative;
  }

  & li label input {
    position: absolute;
    left: 0;
    opacity: 0;
  }

  // scrollbar
  scrollbar-color: ${theme.color['gray/gray150']} transparent;
  scrollbar-width: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.color['gray/gray150']};
    border-radius: 4px;
  }
`;

export const ListBoxItem = styled(Text)``;

export const StyledOption = styled.option``;

export default StyledCombobox;
