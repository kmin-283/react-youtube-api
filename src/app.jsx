import React, { useState, useEffect } from "react";
import styles from "./app.module.css";
import VideoList from "./components/videoList/videoList";
import SearchHeader from "./components/searchHeader/searchHeader";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}></SearchHeader>
      <VideoList videos={videos}></VideoList>
    </div>
  );
}

export default App;
