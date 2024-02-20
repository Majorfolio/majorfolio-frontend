import styled from "styled-components";
import theme from "../../components/common/theme";

export const PageContainer = styled.div`
  background-color: ${ theme.color['gray/grayBG'] };
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const BuyNowContainer = styled.div`
  flex: 1; /* 상단바, 하단바 제외 나머지 영역 차지 */
  padding-bottom: 200px;
`;

export const StickyBottom = styled.section`
  position: sticky;
  bottom: 0;
  background-color: ${theme.color['gray/grayBG']};
`;

export const ButtonWrapper = styled.div`
  padding: 8px 20px;
`;