import styled from 'styled-components';
import theme from '../theme';

export const PageContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  &::after {
    content: ' ';
    width: 100%;
    height: 720px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${theme.color['sub_color/indigo/c']};
    z-index: -1;
  }
`;

export const MainLeftContainer = styled.div`
  position: fixed;
  margin-right: 652px;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`;

export const MainRightContainer = styled.div`
  width: 520px;
  background-color: ${theme.color['gray/grayBG']};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-left: 600px;
  box-shadow: 0px 0px 40px rgba(35, 38, 41, 0.06);

  @media screen and (max-width: 1023px) {
    margin-left: 0;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-left: 0;
  }
`;
