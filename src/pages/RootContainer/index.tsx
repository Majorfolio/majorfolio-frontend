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

export default function RootContainer() {
  RouteChangeTracker();
  useScrollToTop();

  const resetFile = useDraftStore((state) => state.resetFile);

  useEffect(() => {
    resetFile();
  }, []);

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
