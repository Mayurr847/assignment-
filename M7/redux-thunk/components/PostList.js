import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, deletePost } from '../redux/actions';
import { Link } from 'react-router-dom';

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Posts</h1>
      <Link to="/add">Add Post</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
            <button onClick={() => dispatch(deletePost(post.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
