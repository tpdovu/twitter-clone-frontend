import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"695638866993115136"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="benshapiro"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.facebook.com/officialbenshapiro"}
          options={{ text: "sample tweets", via: "benshapiro" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
