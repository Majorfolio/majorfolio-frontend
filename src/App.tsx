import React from 'react';
import Router from './pages';
import GlobalStyle from './components/common/GlobalStyle';
import useAutoSignin from './hooks/common/useAutoSignin';
import useGoogleTagManager from './hooks/useGoogleTagManager';

function App() {
  useGoogleTagManager();
  const { isSigninDone } = useAutoSignin();

  if (!isSigninDone) {
    return <span />;
  }

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
