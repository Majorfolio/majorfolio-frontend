import styled from "styled-components";
import { ArrowDownDefaultIcon } from "../../../assets/icons";
import theme from "../theme";

export const LeftBoxBottomContainer = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SurveyButton = styled.button`
  border: 0;
  background-color: transparent;
  width: 170px;
  display: flex;
  gap: 33px;
  align-items: center;
  padding: 9px 0;
`;

export const QrCodeWrapper = styled.div`
  width: 100px;
  height: 100px;
  padding: 10px;
  border-radius: 4px; 
  border: 1px ${ theme.color['gray/gray150'] } solid;
  display: flex;
  align-items: center;
`;

export const RotateRight = styled(ArrowDownDefaultIcon)`
  transform: rotate(270deg);
  padding: 10px;
`;