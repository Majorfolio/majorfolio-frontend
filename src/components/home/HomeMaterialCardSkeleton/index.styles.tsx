import styled from "styled-components";
import theme from "../../common/theme";

export const CardWrapper = styled.div`
  min-width: 272px;
  background: ${ theme.color['gray/white'] };
  border-radius: 6px;
  box-shadow: 0px 0px 16px rgba(35, 38, 41, 0.04);
`;

export const ProfileWrapper = styled.div`
  width: 102px;
  height: 24px;
  background-color: ${theme.color['gray/gray100']};
  border-radius: 2px;
  margin: 16px;
  cursor: pointer;
`;

export const MaterialWrapper = styled.div`
  padding: 12px 16px 21.6px 16px;
  cursor: pointer;
`;

export const MaterialTitleWrapper = styled.div`
  width: 172px;
  height: 24px;
  background-color: ${theme.color['gray/gray100']};
  border-radius: 2px;
  margin: 0 0 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MaterialInfosContainer = styled.span`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InfoWrapper = styled.span`
  width: 114px;
  height: 14px;
  background-color: ${theme.color['gray/gray100']};
  border-radius: 2px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const InfoWrapperSmall = styled.span`
  width: 60px;
  height: 14px;
  background-color: ${theme.color['gray/gray100']};
  border-radius: 2px;
  display: flex;
  gap: 8px;
  align-items: center;
`;