import { styled } from 'styled-components';
import Button from '../../components/common/Button';
import Row from '../../components/common/Row';

export const StyledTextContainer = styled(Row)`
  text-align: center;
`;

export const StyledSigninContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  min-height: 100vh;
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  row-gap: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 22px 20px;
  gap: 12px;
`;

export const StickyBottom = styled.section`
  position: sticky;
  bottom: 0;
  width: 100%;
`;

export default StyledLogoContainer;
