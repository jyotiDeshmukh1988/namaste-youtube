import React from "react";
import {
  formatNumber,
  formatDuration,
  timeDifference,
} from "../utils/functions";
import { useSelector } from "react-redux";

const VideoCard = ({ info,isRecommended }) => {
  //console.log(info);
  const { contentDetails, snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const prevDate = new Date(publishedAt);
  const previousDate = prevDate.getTime();
  //console.log(prevDate.getTime());
  const currDate = new Date();
  const currentDate = currDate.getTime();
  return (
    <>
      <div className={isRecommended ? "flex flex-row gap-2 md:flex-col lg:flex-row" :"text-sm"}>
        <div className={isRecommended ? "relative w-1/2 md:w-full lg:w-fit" :"relative"}>
          <img
            src={thumbnails?.medium?.url}
            alt={title}
            className="rounded mt-3 cursor-pointer object-cover"
          />

         {/* <span className="bg-black py-1 px-3 text-white rounded ml-1 absolute bottom-3 right-1">
            {formatDuration(contentDetails?.duration)}
  </span>*/}
        </div>
        <div className={isRecommended ? "flex gap-1 flex-col w-1/2 md:w-full lg:w-fit" :"flex gap-1 flex-col"}>
          <h1 className="font-semibold pt-2 cursor-pointer text-clip overflow-hidden text-sm">{title}</h1>
          <h2 className="cursor-pointer text-sm">{channelTitle}</h2>
          <p className="flex gap-1 text-sm">
            {/*<span>{formatNumber(statistics?.viewCount)} views</span>*/}
            <span>{timeDifference(currentDate, previousDate)}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export const ShowRecommended = ({ info,isRecommended }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div>
    <div className="relative">
      <span className="bg-green-900 text-white text-xs absolute top-3 py-1 px-2 z-20">recommended</span>
      </div>
      {!isMenuOpen && <VideoCard info={info} isRecommended={isRecommended}/>}
    </div>
  );
};

export default VideoCard;
