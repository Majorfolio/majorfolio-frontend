import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module';

export default function useGoogleTagManager() {
  useEffect(() => {
    const gtmId = process.env.REACT_APP_GTM_ID;
    if (gtmId) {
      TagManager.initialize({ gtmId });
    }
  }, []);
}
