import React from "react";
import VideoCategory from "./VideoCategory";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)
  return (
    <div className={isMenuOpen ? "w-9/12 p-4" : "w-full p-4"}>
      <VideoCategory />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
