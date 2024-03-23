import { ToastContainer } from 'react-toastify';
import { styled } from 'styled-components';
import { ToastCheckIcon } from '../../assets/icons';
import theme from '../../components/common/theme';

export const StyledContainer = styled.div`
  width: 520px;
  position: relative;
`;

export const StyledToastContainer = styled(ToastContainer)`
  z-index: 100000;
  && {
    padding: 0 20px 0 20px;
    box-sizing: border-box;
    bottom: 58px;
  }

  width: 520px;
  margin-left: 300px;

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  @media screen and (max-width: 1023px) {
    margin-left: 0;
  }
`;

export const StyledToastContainerWithBottomNavigation = styled(
  StyledToastContainer,
)`
  z-index: 100000;
  && {
    bottom: 0px;
  }
`;

export const StyledInfoIcon = styled(ToastCheckIcon)`
  border-radius: 100%;
  background-color: ${theme.color['sub_color/green/p']};
`;
