import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import VideoContainer from "./VideoContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));
  const videoID = searchParams.get("v");
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
   <div className="flex p-4 flex-col md:flex-row">
        <div className="p-2">
          <iframe
            className="aspect-video rounded-lg w-full"
            src={"https://www.youtube.com/embed/" + videoID}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <CommentsContainer videoID={videoID} />
        </div>
        <div className="p-2 w-full">
          {/*<LiveChat />*/}
          <VideoContainer isRecommended={true}/>
        </div>
  </div>
  );
};

export default WatchPage;
