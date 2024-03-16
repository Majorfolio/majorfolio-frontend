import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  MainLeftContainer,
  MainRightContainer,
  PageContainer,
} from '../../components/common/GlobalStyle/index.styles';
import MainLeftBoxTop from '../../components/common/MainLeftBoxTop';
import MainLeftBoxBottom from '../../components/common/MainLeftBoxBottom';
import RouteChangeTracker from '../../components/RouteChangeTracker';
import useScrollToTop from '../../hooks/common/useScrollToTop';

export default function RootContainer() {
  RouteChangeTracker();
  useScrollToTop();

  return (
    <PageContainer>
      <MainLeftContainer>
        <MainLeftBoxTop />
        <MainLeftBoxBottom />
      </MainLeftContainer>
      <MainRightContainer>
        <Outlet />
      </MainRightContainer>
    </PageContainer>
  );
}
