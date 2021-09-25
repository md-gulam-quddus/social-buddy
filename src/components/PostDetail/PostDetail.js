import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  });
  return (
    <div>
      <h1>This is post detail : {id}</h1>
      <p>Title: {post.title}</p>
    </div>
  );
};

export default PostDetail;
