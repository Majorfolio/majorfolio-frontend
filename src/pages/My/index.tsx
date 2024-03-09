import React from 'react';
import { Outlet } from 'react-router-dom';
import useRequireAuth from '../../hooks/common/useRequireAuth';
import { AuthLevel } from '../../store/useAuthStore';

export default function My() {
  // TODO enable access to the page for unverified and verified users when the default UI is created
  const { isAuthLevelSatisfied } = useRequireAuth(
    AuthLevel.Member,
    AuthLevel.Member,
  );

  if (!isAuthLevelSatisfied) {
    return <span />;
  }

  return <Outlet />;
}
