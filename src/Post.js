import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayName, userName, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/08/Lelouch-Zero.jpg" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Calbone Me
              <span className="post__headerSpecial">
                {verified && <VerifiedUserIcon className="post__badge" />} @
                @Lelouch
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>This is my first sample tweet!</p>
          </div>
        </div>
        <img
          src="https://media.giphy.com/media/6901DbEbbm4o0/giphy.gif"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
