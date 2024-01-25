import styled from "styled-components";
import theme from "../theme";

export const SelectedList = styled.div`
  height: 31px;
  padding-top: 17px;
  border-bottom: 2px ${ theme.color['gray/gray900'] } solid;
  flex: 1;
  text-align: center;
  cursor: pointer;
`;

export const UnSelectedList = styled.div`
  height: 31px;
  padding-top: 17px;
  flex: 1;
  text-align: center;
  cursor: pointer;
`;