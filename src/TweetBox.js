import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/08/Lelouch-Zero.jpg" />
          <input placeholder="What's happening?" type="text"></input>
        </div>
        <Button>Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
