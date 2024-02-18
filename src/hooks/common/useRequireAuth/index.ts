import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuthStore from '../../../store/authStore';
import useUserStore from '../../../store/userStore';

type AuthLevelType = 'schoolVerified' | 'member';
// TODO 해당 페이지에 진입할 수 있는 최소 authLevel을 적으면, user의 authLevel을 확인하고 비교하여 반환
// 해당 auth레벨보다 낮은 경우 home으로 naviage 시키거나 접근 불가능 state를 제공
// 어떻게 하지?
//

export default function useRequireAuth(authLevel: AuthLevelType) {
  const navigate = useNavigate();
  const location = useLocation();
  const accessToken = useAuthStore((state) => state.accessToken);
  const restoreCredentials = useAuthStore((state) => state.restoreCredentials);
  const isMember = useAuthStore((state) => state.isMember);
  const emailId = useUserStore((state) => state.emailId);

  // change it to a state and render go-to-home modal
  const isUserSignedin = Boolean(accessToken);
  const hasUserVerifiedSchool = isMember;

  useEffect(() => {
    if (authLevel === 'schoolVerified') {
      if (!emailId) {
        navigate('/home', { state: { from: location }, replace: true });
      }
    } else if (authLevel === 'member') {
      if (!accessToken) {
        navigate('/home', { state: { from: location }, replace: true });
      }
    }
  }, []);

  return { isUserSignedin, hasUserVerifiedSchool };
}
