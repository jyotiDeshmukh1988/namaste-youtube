import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard, { ShowRecommended } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const videos = await data.json();
    //console.log(videos);
    setVideos(videos.items);
  };

  return (
    <div className="flex gap-3 flex-wrap">
      {videos.map((video) => {
        const { likeCount } = video.statistics;
        return (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            {likeCount > 50000 ? (
              <ShowRecommended info={video} />
            ) : (
              <VideoCard info={video} />
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
