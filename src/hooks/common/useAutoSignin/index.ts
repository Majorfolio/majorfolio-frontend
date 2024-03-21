import React, { useEffect, useState } from 'react';
import useAuthStore, { AuthLevel } from '../../../store/useAuthStore';

// TODO check if access token
// TODO if someone has access token, load it to global state and raise auth level to member

export default function useAutoSignin() {
  const restoreCredentials = useAuthStore((state) => state.restoreCredentials);
  useEffect(() => {
    restoreCredentials();
  }, [restoreCredentials]);
}
