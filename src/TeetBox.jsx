import { Button, Avatar } from "@material-ui/core";
import React from "react";
import "./TeetBox.css";

export default function TeetBox() {
  return (
    <div className="teetBox">
      <form>
        <div className="teetBox__input">
          <Avatar src="" />
          <input placeholder="What's happening?" type="text" />
        </div>
        <input
          className="tweetBox__imageInput"
          type="text"
          placeholder="Enter image URL"
        />

        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}
