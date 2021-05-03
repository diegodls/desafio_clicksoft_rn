import React from 'react';
import Routes from './src/routes/routes';
import {StatusBar} from './src/components/StatusBar';
import {PostsProvider} from './src/contexts/posts';
import {AppProvider} from './src/contexts/app';

const App = () => {
  return (
    <>
      <AppProvider>
        <PostsProvider>
          <StatusBar />
          <Routes />
        </PostsProvider>
      </AppProvider>
    </>
  );
};

export default App;
