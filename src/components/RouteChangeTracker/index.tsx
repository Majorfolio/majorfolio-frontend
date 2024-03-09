import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

export default function RouteChangeTracker() {
  const { pathname } = useLocation();
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    const currentURL = window.location.href;
    if (
      !currentURL.includes('localhost') &&
      !currentURL.includes('localhost')
    ) {
      const trackingID = process.env.REACT_APP_GOOGLE_ANALYTICS_TRAKING_ID;
      if (trackingID) {
        ReactGA.initialize(trackingID);
        setInitialized(true);
      }
    }
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.set({ page: pathname });
      ReactGA.send('pageview');
    }
  }, [initialized, pathname]);
}
