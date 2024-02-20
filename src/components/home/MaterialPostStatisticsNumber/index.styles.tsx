import styled from 'styled-components';
import theme from '../../common/theme';

export const NumbersContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

export const NumberWrapper = styled.span`
  padding: 10px 16px 9px 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
`;

export const StyledMyProfileNumberContainer = styled(NumbersConatainer)`
  margin-top: 24px;
  padding: 8px 40px;
  border-radius: 6px;
  background-color: ${theme.color['gray/gray50']};
`;
