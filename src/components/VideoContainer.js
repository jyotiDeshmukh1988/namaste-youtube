import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

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
    <div className="flex gap-6 flex-wrap">
      {videos.map((video)=>{
        return <VideoCard info={video} key={video.id}/>
      })}
    </div>
  );
};

export default VideoContainer;
