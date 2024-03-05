import React from "react";
import {YOUTUBE_CATEGORIES_VIDEOS_API} from "../utils/constants";
import { useDispatch } from "react-redux";
import { addVideos } from "../store/categoryFilterSlice";
const Button = ({name}) => {
  const dispatch = useDispatch();
  const filterVideoList = async(name) => {
    const data = await fetch(YOUTUBE_CATEGORIES_VIDEOS_API+name+"&key="+process.env.REACT_APP_GOOGLE_API_KEY);
    const result = await data.json();
    //console.log(result.items);
    dispatch(addVideos(result.items));
  }

  return (
    <div className="w-full">
      <button className="w-44 px-4 py-1 bg-gray-100 rounded text-sm font-semibold" onClick={()=>filterVideoList(name)}>{name}</button>
    </div>
  );
};

export default Button;
