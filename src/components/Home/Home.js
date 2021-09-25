import React, { useEffect, useState } from "react";
import Post from "../Post/Post";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h1>This Home Posts : {posts.length}</h1>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default Home;
