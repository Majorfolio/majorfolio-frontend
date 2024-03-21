import React, { useEffect } from 'react';
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
import useDraftStore from '../../store/useDraftStore';
import useClearGarbage from '../../hooks/useClearGarbage';

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
    </PageContainer>
  );
}
