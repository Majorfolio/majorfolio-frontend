import styled from 'styled-components';
import theme from '../../common/theme';

export const CardWrapper = styled.div`
  min-width: 272px;
  background: ${theme.color['gray/white']};
  border-radius: 6px;
  box-shadow: 0px 0px 16px rgba(35, 38, 41, 0.04);
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;

export const ProfileWrapper = styled.div`
  padding: 16px;
  /* cursor: pointer; */
`;

export const MaterialWrapper = styled.div`
  padding: 0 16px 20px 16px;
  cursor: pointer;
`;

export const MaterialTitleWrapper = styled.div`
  padding: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MaterialInfosContainer = styled.span`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InfoWrapper = styled.span`
  display: flex;
  gap: 8px;
  align-items: center;
`;
