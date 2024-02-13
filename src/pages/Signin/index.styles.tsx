import { styled } from 'styled-components';
import Button from '../../components/common/Button';

export const StyledSigninContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  row-gap: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 12px;
  position: absolute;
  bottom: 22px;
`;

export const StyledSigninButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`;

export default StyledLogoContainer;
