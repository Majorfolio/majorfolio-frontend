import styled from "styled-components";
import theme from "../theme";

export const BottomBarContainer = styled.div`
  padding: 0 20px;
  position: relative;
  display: flex;
`;

export const RadioNavigationWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 20px;
  right: 20px;
  display: flex;
`;

export const CustomRadioNavigation = styled.input`
  height: 56px;
  margin: 0;
  flex: 1;
  appearance: none;
  &:hover{
    cursor: pointer;
  }
`;

export const IconsContainer = styled.div`
  width: auto;
  padding: 8px 0 12px 0;
  display: flex;
  justify-content: space-around;
  flex: 1;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;