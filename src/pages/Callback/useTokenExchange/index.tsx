import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuthStore from '../../../store/useAuthStore';
import useUserStore from '../../../store/useUserStore';

interface AuthType {
  isMember: boolean;
  memberId: number;
  accessToken: string;
  refreshToken: string;
}

export default function useTokenExchange() {
  const location = useLocation();
  const navigate = useNavigate();

  const { signin, ...auth } = useAuthStore((state) => state);
  const isLoading = Boolean(auth.accessToken);
  const updateEmail = useUserStore((state) => state.updateEmail);

  useEffect(() => {
    const authenticate = async () => {
      const queryString = location.search;
      const searchParams = new URLSearchParams(queryString);
      const code = searchParams.get('code');

      if (!code) {
        throw new Error('에러 발생');
      }
      const updatedAuth = await signin(code);
      const { emailId, isWriteMemberDetailInfo } = updatedAuth;
      if (emailId !== 0) {
        updateEmail(emailId);
      }
      if (isWriteMemberDetailInfo) {
        navigate('/home');
      } else {
        navigate('/signup');
      }
    };

    authenticate();
  }, [location]);

  return { isLoading, auth };
}
