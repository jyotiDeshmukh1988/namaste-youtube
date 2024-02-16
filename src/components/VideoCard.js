import React from "react";
import {
  formatNumber,
  formatDuration,
  timeDifference,
} from "../utils/functions";

const VideoCard = ({ info }) => {
 // console.log(info);
  const { contentDetails, snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const prevDate = new Date(publishedAt);
  const previousDate = prevDate.getTime();
  //console.log(prevDate.getTime());
  const currDate = new Date();
  const currentDate = currDate.getTime();
  return (
    <>
      <div className="w-60 text-sm">
        <div className="relative">
        <img
          src={thumbnails?.standard?.url}
          alt={title}
          className="w-full rounded mt-3 cursor-pointer"
        />
        
        <span className="bg-black py-1 px-3 text-white rounded ml-1 absolute bottom-3 right-1">
          {formatDuration(contentDetails?.duration)}
        </span>
        </div>
        <div className="flex gap-2 flex-col">
          <h1 className="font-semibold pt-2 cursor-pointer">{title}</h1>
          <h2 className="cursor-pointer">{channelTitle}</h2>
          <p className="flex gap-2">
            <span>{formatNumber(statistics?.viewCount)} views</span>
            <span>{timeDifference(currentDate, previousDate)}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
