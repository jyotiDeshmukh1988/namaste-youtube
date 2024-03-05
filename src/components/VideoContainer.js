import React, { useEffect } from "react";
import {
  YOUTUBE_CATEGORIES_VIDEOS_API
} from "../utils/constants";
import VideoCard, { ShowRecommended } from "./VideoCard";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addVideos } from "../store/categoryFilterSlice";
const VideoContainer = ({ isRecommended }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(
      YOUTUBE_CATEGORIES_VIDEOS_API + "all&key=" + process.env.REACT_APP_GOOGLE_API_KEY
    );
    const result = await data.json();
   // console.log(result.items);
    dispatch(addVideos(result.items));
  };

  const filterVideoList = useSelector((store) => {
    return store.videocategory.category;
  });

  //console.log(filterVideoList);

  //if(filterVideoList.length > 0) setVideos(filterVideoList);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="flex flex-wrap overflow-hidden">
      {filterVideoList.length > 0 &&
        filterVideoList?.map((video) => {
          const { id } = video;
          const { videoId } = id;
          const videoID = videoId ? videoId : "aDm5WZ3QiIE";
          return (
            <div className={isMenuOpen ? "w-2/6" : isRecommended ? "w-full" :"w-1/2 md:w-1/4 px-2"}>
              <Link to={"/watch?v=" + videoID} key={video?.etag}>
                {isRecommended ? (
                  <ShowRecommended info={video} isRecommended={isRecommended}/>
                ) : (
                  <VideoCard info={video} isRecommended={isRecommended}/>
                )}
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default VideoContainer;
