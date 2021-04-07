import React from "react";
import VideoItem from "../videoItem/videoItem";
import styles from "./videoList.module.css";

const VideoList = ({ videos, onVideoClick, display }) => (
  <ul className={styles.videos}>
    {videos.map((video) => (
      <VideoItem
        key={video.id}
        video={video}
        onVideoClick={onVideoClick}
        display={display}
      ></VideoItem>
    ))}
  </ul>
);

export default VideoList;
