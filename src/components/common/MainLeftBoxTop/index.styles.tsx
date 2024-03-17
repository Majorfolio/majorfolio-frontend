import styled from "styled-components";
import theme from "../theme";

export const LeftBoxTopContainer = styled.section`
  width: 468px;
  height: 720px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
`;

export const TopLogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LoginButton = styled.button`
  border: 0;
  background-color: transparent;
  padding: 7px 0 8px 0;
  margin-bottom: 5px;
  cursor: pointer;
`;

export const MiddleDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DescriptionMainTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BottomBanner = styled.img`
  width: 468px;
  min-width: 100%;
  height: 108px;
  border-radius: 6px;
  object-fit: cover;
  scroll-snap-align: start;
`;

export const BottomBannerWrapper = styled.div`
  width: 468px;
  height: 108px;
  border-radius: 6px;
  background-color: ${ theme.color['sub_color/indigo/s'] };
  display: flex;

  /* 좌우 스크롤 설정 */
  flex-direction: row;
  overflow: auto hidden;
  scroll-snap-type: x mandatory;
`;