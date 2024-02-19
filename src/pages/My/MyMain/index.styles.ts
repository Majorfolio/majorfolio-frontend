import { styled } from 'styled-components';
import { CharacterSmall1Icon } from '../../../assets/icons';

export const StyledProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledWelcomeSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  row-gap: 16px;
`;
export const StyledPortrait = styled(CharacterSmall1Icon)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92px;
  height: 92px;
`;
export const StyledProfileIntro = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-content: flex-start;
`;

export const StyledProfileCountRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 8px 41px;
  column-gap: 4px;
`;

export const StyledTagSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  row-gap: 6px;
`;
