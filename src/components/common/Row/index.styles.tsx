import { styled } from 'styled-components';
import { RowPropsType } from './index.types';
import theme from '../theme';

const StyledRow = styled.div<RowPropsType>`
  display: flex;
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'start'};
  column-gap: ${({ gap }) => (gap ? `${gap}px` : 'normal')};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : '')};
  border-radius: ${({ radius }) => (radius ? `${radius}px` : '0')};

  box-sizing: border-box;
  background-color: ${({ background }) =>
    background ? `${theme.color[background]}` : 'transparent'};

  margin: ${({ margin }) => margin || ''};
  margin-top: ${({ mt }) => (mt ? `${mt}px` : '')};
  margin-right: ${({ mr }) => (mr ? `${mr}px` : '')};
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : '')};
  margin-left: ${({ ml }) => (ml ? `${ml}px` : '')};

  padding: ${({ padding }) => padding || ''};
  padding-top: ${({ pt }) => (pt ? `${pt}px` : '')};
  padding-right: ${({ pr }) => (pr ? `${pr}px` : '')};
  padding-bottom: ${({ pb }) => (pb ? `${pb}px` : '')};
  padding-left: ${({ pl }) => (pl ? `${pl}px` : '')};
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
