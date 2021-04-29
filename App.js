import React from 'react';

import Routes from './src/routes/routes';

import {StatusBar} from './src/components/StatusBar';

import colors from './src/styles/colors';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.primary} />
      <Routes />
    </>
  );
};

export default App;
