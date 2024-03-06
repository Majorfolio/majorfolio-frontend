import { styled } from 'styled-components';

export const StyledRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const StyledSpacedRow = styled(StyledRow)`
  justify-content: space-between;
`;

export const StyledGappedRow = styled(StyledRow)<{ gap: number }>`
  justify-content: start;
  column-gap: ${({ gap }) => `${gap}px`};
`;

export const StyledCenteredRow = styled(StyledRow)`
  justify-content: center;
`;

export default StyledRow;
