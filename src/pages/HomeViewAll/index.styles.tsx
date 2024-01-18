import styled from "styled-components";
import theme from "../../components/common/theme";

export const ViewAllContainer = styled.div`
  background-color: ${ theme.color['gray/grayBG'] };
`;

export const CardTitleWrapper = styled.div`
  padding: 40px 20px 0 20px;
`;

export const CardsWrapper = styled.div`
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;