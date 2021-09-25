import React from "react";
import { useHistory } from "react-router";

const Post = ({ post }) => {
  const { id, title, body } = post;
  const history = useHistory();
  const showComent = (id) => {
    const url = `post/${id}`;
    history.push(url);
  };
  return (
    <div>
      <h3>
        This post id :{id} and his title: {title}{" "}
      </h3>
      <p>{body}</p>
      <button onClick={() => showComent(id)}>Show Components</button>
    </div>
  );
};

export default Post;
