import styled from 'styled-components';
import theme from '../../components/common/theme';

export const MaterialBoxContainer = styled.div`
  flex: 1; /* 상단바, 하단바 제외 나머지 영역 차지 */
`;

export const CardTitleWrapper = styled.div`
  padding: 40px 20px 0 20px;
`;

export const CardsWrapper = styled.div`
  padding: 16px 20px 0 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const NoMaterialTextWrapper = styled.div`
  padding-top: 295px;
  display: flex;
  justify-content: center;
`;
