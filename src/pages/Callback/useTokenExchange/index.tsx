import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuthStore from '../../../store/authStore';

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

  useEffect(() => {
    const authenticate = async () => {
      const queryString = location.search;
      const searchParams = new URLSearchParams(queryString);
      const code = searchParams.get('code');

      if (!code) {
        throw new Error('에러 발생');
      }
      await signin(code);
      navigate('/signup');
    };

    authenticate();
  }, [location]);

  return { isLoading, auth };
}
