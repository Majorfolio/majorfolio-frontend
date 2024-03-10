import styled from 'styled-components';
import theme from '../theme';

export const StyledTopbarContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const StyledPrimaryTopbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 10px;
  width: 100%;
  box-sizing: border-box;
  background-color: ${theme.color['gray/grayBG']};
  padding-top: 4px;
  padding-bottom: 4px;
`;

export const StyledSecondaryTopbarWrapper = styled(StyledPrimaryTopbarWrapper)`
  && {
    padding-left: 10px;
    padding-top: 4px;
    padding-bottom: 4px;
  }
`;

export const StyledSecondaryBlackTopbarWrapper = styled(
  StyledPrimaryTopbarWrapper,
)`
  background-color: ${theme.color['gray/black']};
  && {
    padding-left: 10px;
  }
`;

export const StyledIconRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 4px;
`;

export const StyledIconContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const StyledLeftSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;
