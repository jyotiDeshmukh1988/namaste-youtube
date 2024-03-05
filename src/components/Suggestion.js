import React from "react";
import { addVideos } from "../store/categoryFilterSlice";
import {useDispatch } from "react-redux";
import {YOUTUBE_SEARCH_VIDEOS_API } from "../utils/constants";
const Suggestion = ({ value }) => {
const dispatch = useDispatch();
const getautoSearchVideo = async(value) =>{
    // console.log(autoval);
    const data = await fetch(YOUTUBE_SEARCH_VIDEOS_API+value+"&key="+process.env.REACT_APP_GOOGLE_API_KEY);
    const result = await data.json();
    //console.log(result.items);
    dispatch(addVideos(result.items));
} 

  return (
    <div>
      <li
        className="py-2 px-3 hover:bg-gray-200 cursor-pointer"
        key={value}
        onClick={() => getautoSearchVideo()}
      >
        {value}
      </li>
    </div>
  );
};

export default Suggestion;
