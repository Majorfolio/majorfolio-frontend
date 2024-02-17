import { styled } from 'styled-components';

export const StyledPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
`;

export const StyledSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  row-gap: 16px;
  margin: 20px 0;
`;

export const StyledItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  row-gap: 12px;
  width: 100%;
`;

export default StyledPageContainer;
