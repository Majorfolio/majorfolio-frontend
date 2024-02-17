import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuthStore from '../../../store/authStore';

export default function useRequireAuth() {
  const navigate = useNavigate();
  const location = useLocation();
  const accessToken = useAuthStore((state) => state.accessToken);
  const restoreCredentials = useAuthStore((state) => state.restoreCredentials);

  // change it to a state and render go-to-home modal
  const isUserSignedin = Boolean(accessToken);

  useEffect(() => {
    if (!accessToken && !restoreCredentials()) {
      navigate('/home', { state: { from: location }, replace: true });
    }
  }, [navigate, location, accessToken, restoreCredentials]);

  return { isUserSignedin };
}
