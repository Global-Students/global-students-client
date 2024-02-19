import React, { useState } from 'react';
import PostCreate from './PostCreate';
import PostView from './PostView';
import PostUpdate from './PostUpdate';
import PostList from '../../components/PostList';

export default function PostContainer() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]);

  const handleCreatePost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <PostCreate setTitle={setTitle} setContent={setContent} onCreatePost={handleCreatePost} />
      <PostUpdate setTitle={setTitle} setContent={setContent} />
      <PostView title={title} content={content}/>
      <PostList posts={posts} />
    </div>
  );
}
