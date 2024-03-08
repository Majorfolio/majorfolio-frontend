import { styled } from 'styled-components';

const StyledHelperText = styled.span`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const StyledTextContainer = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-top: 12px;
  margin-bottom: 28px;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  column-gap: 14px;
  margin-top: 40px;
`;

export default StyledHelperText;
