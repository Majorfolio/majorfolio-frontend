import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuthStore from '../../../store/authStore';

export default function useRequireAuth() {
  const navigate = useNavigate();
  const location = useLocation();
  const accessToken = useAuthStore((state) => state.accessToken);

  const isUserSignedin = Boolean(accessToken);

  useEffect(() => {
    console.log(accessToken);
    if (!accessToken) {
      navigate('/home', { state: { from: location }, replace: true });
    }
    // TODO send refresh token to issue access token again
  }, [navigate, location, accessToken]);

  return { isUserSignedin };
}
