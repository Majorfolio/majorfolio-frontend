import styled from "styled-components";
import theme from "../../components/common/theme";

export const HomeContainer = styled.div`
  background-color: ${ theme.color['gray/grayBG'] };
`;

export const ContentPageContainer = styled.div`
  padding: 24px 0 200px 20px;
`;

export const CardWrapper = styled.div`
  padding-bottom: 16px;
  padding-right: 20px;
  display: flex;
  gap: 12px;
  flex-wrap: nowrap;
  overflow-x: scroll;
`;