import React from 'react';
import Header from './Header';
import NewPostForm from './NewPostForm';
import PostList from './PostList';

function App() {
  return (
    <React.Fragment>
      <Header />
      <NewPostForm />
      <PostList />
    </React.Fragment>
  );
}

export default App;