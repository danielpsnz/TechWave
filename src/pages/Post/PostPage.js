import React from "react";
import { useParams } from "react-router-dom";
import { postData } from "../../data/data";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./PostPage.css";

const Post = () => {
  const { id } = useParams();
  const post = postData.find((post) => post.id === parseInt(id));

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-header">
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            <span className="post-date">{post.date}</span>
            <span className="post-author">{post.author}</span>
          </div>
        </div>
        <div className="post-body">{post.content}</div>
      </div>
      <Sidebar />
    </div>
  );
};

export default Post;
