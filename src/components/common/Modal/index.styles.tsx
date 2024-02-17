import { styled } from 'styled-components';

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  column-gap: 12px;
`;

export const StyledDialog = styled.dialog`
  border: none;
  margin: 0;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 320px;
  height: 220px;
  box-sizing: border-box;
  padding: 0;
  border-radius: 16px;
`;

export const StyledModalContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  padding: 28px 20px 20px 20px;
  box-sizing: border-box;

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const StyledTitleRow = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  column-gap: 8px;
`;

export const StyledBodyContianer = styled.div`
  margin-top: 12px;
  margin-bottom: 40px;
`;
