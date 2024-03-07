import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuthStore, { AuthLevel } from '../../../store/useAuthStore';
import useUserStore from '../../../store/userStore';

// TODO 해당 페이지에 진입할 수 있는 최소 authLevel을 적으면, user의 authLevel을 확인하고 비교하여 반환
// 해당 auth레벨보다 낮은 경우 home으로 naviage 시키거나 접근 불가능 state를 제공
// 어떻게 하지?
//

export default function useRequireAuth(
  minimumAllowedLevel: AuthLevel,
  maximumAllowedLevel: AuthLevel,
) {
  const navigate = useNavigate();
  const authLevel = useAuthStore((state) => state.authLevel);

  const isAuthLevelSatisfied =
    minimumAllowedLevel <= authLevel && authLevel <= maximumAllowedLevel;

  useEffect(() => {
    if (!isAuthLevelSatisfied) {
      navigate('/');
    }
  }, [isAuthLevelSatisfied, navigate]);

  return { isAuthLevelSatisfied };
}
