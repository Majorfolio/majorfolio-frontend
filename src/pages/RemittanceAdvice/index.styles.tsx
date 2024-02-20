import styled from "styled-components";
import theme from "../../components/common/theme";
import { CopyIcon } from "../../assets/icons";

export const PageContainer = styled.div`
  background-color: ${ theme.color['gray/grayBG'] };
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const AdviceContainer = styled.div`
  flex: 1; /* 상단바, 하단바 제외 나머지 영역 차지 */
  padding-bottom: 200px;
`;

export const RemittanceContainer = styled.div`
  padding: 20px 16px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  background-color: ${ theme.color['gray/white'] };
  box-shadow: 0px 0px 16px rgba(35, 38, 41, 0.04);
  border-radius: 6px;  
`;

export const CodeAdviceContainer = styled.section`
  padding: 32px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CodeContainer = styled.div`
  padding: 4px 6px 4px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px; 
  border: 1px ${ theme.color['gray/gray100'] } solid;
`;

export const CopyButton = styled(CopyIcon)`
  cursor: pointer;
`;

export const HelperTextWrapper = styled.div`
  display: flex;
  gap: 2px;
`;

export const ButtonWrapper = styled.div`
  padding: 8px 20px;
  display: flex;
  gap: 12px;
`;

export const StickyBottom = styled.section`
  position: sticky;
  bottom: 0;
  background-color: ${theme.color['gray/grayBG']};
`;

export const MarginBottom16 = styled.span`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
`;

export const MarginBottom4 = styled.span`
  margin-bottom: 4px;
`;