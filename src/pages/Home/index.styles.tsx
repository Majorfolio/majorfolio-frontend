import styled from 'styled-components';
import theme from '../../components/common/theme';

export const PageContainer = styled.div`
  background-color: ${theme.color['gray/grayBG']};
  display: flex;
  flex-direction: column;
  width: 100%;
  /* padding: 0px 20px; */
  min-height: 100vh;
  box-sizing: border-box;
`;

export const HomeContainer = styled.div`
  flex: 1; /* 상단바, 하단바 제외 나머지 영역 차지 */
  padding-bottom: 200px;
`;

export const ContentPageContainer = styled.div`
  padding: 24px 0 0 20px;
`;

export const CardWrapper = styled.div`
  padding-bottom: 16px;
  padding-right: 20px;
  display: flex;
  gap: 12px;
  flex-wrap: nowrap;
  overflow-x: scroll;
`;

export const NoMaterialWrapper = styled.section`
  padding: 148px 20px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;