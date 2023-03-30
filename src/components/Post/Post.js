import React from 'react';
import './Post.css';

const Post = ({ title, date, content }) => {
  return (
    <article className="post">
      <h2 className="post-title">{title}</h2>
      <p className="post-date">{date}</p>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  );
};

export default Post;
