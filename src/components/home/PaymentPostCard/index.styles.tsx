import styled from "styled-components";
import theme from "../../common/theme";

export const CardWrapper = styled.div`
  padding: 20px 16px;
`;

export const CardTitleWrapper = styled.div`
  padding-right: 4px;
  display: flex;
  justify-content: space-between;
`;

export const InfosWrapper = styled.span`
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InfoWrapper = styled.span`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const MaterialPriceWrapper = styled.div`
  padding: 8px 4px 0 4px;
  border-top: 1px ${ theme.color['gray/gray50'] } solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;