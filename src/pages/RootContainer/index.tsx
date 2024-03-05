import React from 'react';
import { Outlet } from 'react-router-dom';
import {
  MainLeftContainer,
  MainRightContainer,
  PageContainer,
} from '../../components/common/GlobalStyle/index.styles';
import MainLeftBoxTop from '../../components/common/MainLeftBoxTop';
import MainLeftBoxBottom from '../../components/common/MainLeftBoxBottom';

export default function RootContainer() {
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
