import React, { useEffect,useState } from "react";
import SingleVideo from "./SingleVideo";
import { YOUTUBE_CATEGORIES_API } from "../utils/constants";

//const buttonitems = ["All","Live","Music","Bollywood Music","Stock Market","BK Shivani","Satsang","Animated Movies"];

const ButtonList = () => {
  const [videoCategory,setVideoCategory] = useState([]);
  useEffect(() => {
    getVideoCategory();
  }, []);

  const getVideoCategory = async () => {
    const tags = await fetch(YOUTUBE_CATEGORIES_API);
    const categories = await tags.json();
    //console.log(categories.items);
    setVideoCategory(categories.items);
  };

  return (
    <div className="flex gap-3 overflow-x-scroll">
      {videoCategory.map((buttonname)=>{
        const {snippet,id} = buttonname;
        const {title} = snippet;
          return <SingleVideo name={title} key={id}/>
        })}
    </div>
  );
};

export default ButtonList;
