import styled from "styled-components";
import theme from "../theme";

export const Tag = styled.span`
  height: 14px;
  padding: 4px 8px;
  background: ${ theme.color['gray/gray100'] };
  border-radius: 4px;
  font-size: 12px;
`;

export default Tag;