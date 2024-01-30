import styled from "styled-components";
import theme from "../theme";

export const Divider = styled.div`
  height: 0;
  border-top: 1px ${ theme.color['gray/gray50'] } solid;
`;

export default Divider;