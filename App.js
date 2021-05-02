import React from 'react';
import Routes from './src/routes/routes';
import {StatusBar} from './src/components/StatusBar';
import {PostsProvider} from './src/contexts/posts';

const App = () => {
  return (
    <>
      <PostsProvider>
        <StatusBar />
        <Routes />
      </PostsProvider>
    </>
  );
};

export default App;
