import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  
  // Mock data - in real app, this would come from API
  const posts = {
    1: { title: 'My First Post', content: 'Just finished working on an amazing new project!', author: 'John Doe' },
    2: { title: 'Learning Journey', content: 'Learning React has been an incredible journey!', author: 'John Doe' },
    3: { title: 'Hiking Adventure', content: 'Beautiful day for a hike!', author: 'Jane Smith' }
  };

  const post = posts[postId];
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      alert('Please fill in both title and content');
      return;
    }

    // In a real app, you would send this data to an API
    console.log('Updating post:', { postId, title, content });

    // Show success message and redirect
    alert('Post updated successfully!');
    navigate('/');
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="form-container">
      <h1 className="page-title">Edit Post</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="postTitle">Post Title:</label>
          <input
            id="postTitle"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="postContent">Post Content:</label>
          <textarea 
            id="postContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>

        <button type="submit" className="button">
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
