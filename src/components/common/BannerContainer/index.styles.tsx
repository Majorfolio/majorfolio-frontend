import styled from "styled-components";

export const BannerContainerWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;

  /* 좌우 스크롤 설정 */
  flex-direction: row;
  overflow: auto hidden;
  scroll-snap-type: x mandatory;
`;

export default BannerContainerWrapper