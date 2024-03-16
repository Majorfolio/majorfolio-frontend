import styled from 'styled-components';
import { StickyContainer } from '../BottomBar/index.styles';
import theme from '../theme';

const StyledBottomButtonBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: content-box;
  column-gap: 12px;
  padding: 8px 20px;
  position: relative;
  right: 20px;
  background-color: ${theme.color['gray/grayBG']};
  z-index: 3;
`;

export const StyledDividerContainer = styled.div`
  width: calc(100% + 40px);
  position: relative;
  right: 20px;
`;
export default StyledBottomButtonBar;
