import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox.js";
import Post from "./Post.js";
import Axios from "axios";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* tweet box */}
      <TweetBox />
      
      {/* post */}
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
