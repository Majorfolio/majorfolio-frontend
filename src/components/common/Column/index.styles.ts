import { styled } from 'styled-components';
import { ColumnPropsType } from './index.types';
import theme from '../theme';

const StyledColumn = styled.div<ColumnPropsType>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : '')};
  align-items: ${({ align }) => align || 'stretch'};
  justify-content: ${({ justify }) => justify || 'center'};
  row-gap: ${({ gap }) => (gap ? `${gap}px` : 'normal')};
  border-radius: ${({ radius }) => (radius ? `${radius}px` : 'normal')};

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

export default StyledColumn;
