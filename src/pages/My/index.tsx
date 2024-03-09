import React from 'react';
import { Outlet } from 'react-router-dom';
import useRequireAuth from '../../hooks/common/useRequireAuth';
import { AuthLevel } from '../../store/useAuthStore';

export default function My() {
  const { isAuthLevelSatisfied } = useRequireAuth(
    AuthLevel.Unverified,
    AuthLevel.Member,
  );
  console.log(isAuthLevelSatisfied);
  if (!isAuthLevelSatisfied) {
    return <span />;
  }

  return <Outlet />;
}
