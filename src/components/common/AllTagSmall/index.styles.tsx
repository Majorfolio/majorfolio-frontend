import styled from "styled-components";
import theme from "../theme";

export const Tag = styled.span`
  height: 12px;
  padding: 2.5px 6px;
  background: ${ theme.color['gray/gray100'] };
  border-radius: 2px;
  font-size: 10px;
`;

export default Tag;