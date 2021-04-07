import React, { useState, useEffect, useCallback } from "react";
import styles from "./app.module.css";
import VideoList from "./components/videoList/videoList";
import SearchHeader from "./components/searchHeader/searchHeader";
import VideoDetail from "./components/videoDetail/videoDetail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = useCallback(
    (query) => {
      setSelectedVideo(null);
      youtube
        .search(query) //
        .then((videos) => {
          setVideos(videos);
        });
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}></SearchHeader>
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            {<VideoDetail video={selectedVideo}></VideoDetail>}
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          ></VideoList>
        </div>
      </section>
    </div>
  );
}

export default App;
