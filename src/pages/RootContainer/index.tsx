import React from 'react';
import { Outlet } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';
import {
  MainLeftContainer,
  MainRightContainer,
  PageContainer,
} from '../../components/common/GlobalStyle/index.styles';
import MainLeftBoxTop from '../../components/common/MainLeftBoxTop';
import MainLeftBoxBottom from '../../components/common/MainLeftBoxBottom';
import RouteChangeTracker from '../../components/RouteChangeTracker';
import useScrollToTop from '../../hooks/common/useScrollToTop';
import useClearGarbage from '../../hooks/useClearGarbage';
import {
  StyledToastContainer,
  StyledToastContainerWithBottomNavigation,
  StyledInfoIcon,
} from './index.styles';
import 'react-toastify/dist/ReactToastify.min.css';
import Row from '../../components/common/Row';
import Text from '../../components/common/Text';
import theme from '../../components/common/theme';

export const notify = (
  text: string,
  containerId: 'with-bottom-bar' | 'without-bottom-bar',
) => {
  toast.dismiss();
  toast.success(
    <Row gap={8} pl={20} pt={14} pb={14}>
      <StyledInfoIcon />
      <Text color="gray/white" size={14}>
        {text}
      </Text>
    </Row>,
    {
      theme: 'dark',
      containerId,
    },
  );
};

export default function RootContainer() {
  RouteChangeTracker();
  useScrollToTop();
  useClearGarbage();

  return (
    <PageContainer>
      <MainLeftContainer>
        <MainLeftBoxTop />
        <MainLeftBoxBottom />
      </MainLeftContainer>
      <MainRightContainer>
        <Outlet />
      </MainRightContainer>
      <StyledToastContainer
        containerId="with-bottom-bar"
        closeButton={false}
        icon={false}
        hideProgressBar
        autoClose={999999}
        limit={1}
        transition={Slide}
        draggable
        position="bottom-center"
      />
      <StyledToastContainerWithBottomNavigation
        containerId="without-bottom-bar"
        closeButton={false}
        icon={false}
        hideProgressBar
        autoClose={999999}
        limit={1}
        transition={Slide}
        draggable
        position="bottom-center"
      />
    </PageContainer>
  );
}
