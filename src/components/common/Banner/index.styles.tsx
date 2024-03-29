import styled from "styled-components";
import theme, { ColorType } from "../theme";

interface BannerWrapperProps {
  backgroundColor?: ColorType;
}

export const BannerWrapper = styled.li<BannerWrapperProps>`
  height: 200px;
  position: relative;
  background-color: ${({ backgroundColor }) => backgroundColor ? theme.color[backgroundColor] : theme.color['main_color/blue_p'] };
  scroll-snap-align: start;
  min-width: 100%;
  &:hover {
    cursor: pointer;
  }
`;

export const TagWrapper = styled.span`
  position: absolute;
  top: 16px;
  left: 20px;
`;

export const ContentWrapper = styled.div`
  height: 100px;
  padding: 50px 32px 50px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ImgWrapper = styled.img``;

