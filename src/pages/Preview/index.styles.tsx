import styled from "styled-components";
import theme from "../../components/common/theme";

export const BlackBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.color['gray/black']};
`;

export const PreviewConatainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PreviewRollingWrapper = styled.ul`
  display: flex;
  align-items: center;
  /* 좌우 스크롤 설정 */
  flex-direction: row;
  overflow: auto hidden;
  scroll-snap-type: x mandatory;
`;

export const PreviewImage = styled.img`
  min-width: 100%;  
  object-fit: contain;
  scroll-snap-align: start;
`