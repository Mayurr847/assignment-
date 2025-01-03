import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostDetail from './components/PostDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/add" element={<PostForm />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
