import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

export default function RouteChangeTracker() {
  const { pathname } = useLocation();
  const [initialized, setInitialized] = useState<boolean>(false);

  useEffect(() => {
    const currentURL = window.location.href;
    console.log(currentURL);
    console.log('hi');
    if (!currentURL.includes('localhost') && !currentURL.includes('vercel')) {
      const trackingID = process.env.REACT_APP_GOOGLE_ANALYTICS_TRAKING_ID;
      console.log(process.env.REACT_APP_GOOGLE_ANALYTICS_TRAKING_ID);
      if (trackingID) {
        console.log('initialized');
        ReactGA.initialize(trackingID);
        setInitialized(true);
      }
    }
  }, []);

  useEffect(() => {
    console.log('cache');
    if (initialized) {
      ReactGA.set({ page: pathname });
      ReactGA.send('pageview');
    }
  }, [initialized, pathname]);
}
