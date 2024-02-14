import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HTTP_HEADERS, HTTP_METHODS } from '../../../apis/constants';
import getIdToken from '../../../apis/auth';
import getAuth from '../../../apis/member';
import useAuthStore from '../../../store/authStore';

const API_URL1 =
  'http://ec2-54-180-59-160.ap-northeast-2.compute.amazonaws.com';
const API_URL2 = 'https://majorfolio-server.shop';
const PATH = '/member/login';

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
