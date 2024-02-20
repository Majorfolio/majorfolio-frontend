import styled from 'styled-components';

const StyledDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 8px;
`;

export const StyledExpandedDescriptionContainer = styled(
  StyledDescriptionContainer,
)`
  margin-top: 32px;
`;

export default StyledDescriptionContainer;
