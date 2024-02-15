import styled from "styled-components";
import theme from "../../components/common/theme";

export const PageContainer = styled.div`
  background-color: ${ theme.color['gray/grayBG'] };
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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