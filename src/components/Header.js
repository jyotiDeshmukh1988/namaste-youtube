import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/appSlice";
import {
  YOUTUBE_SEARCH_API,
  YOUTUBE_SEARCH_VIDEOS_API,
} from "../utils/constants";
import { cacheResults } from "../store/searchSlice";
import { addVideos } from "../store/categoryFilterSlice";

const Header = () => {
  //console.log(menuOpen);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]); //
  const [showSuggestions, setShowSuggestions] = useState(false);
  //console.log(searchQuery);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);

  /*
   * searchCache = {
   *   {
   *     "iphone" : ["iphone 11","iphone 14"]
   *   }
   * }
   * searchQuery = iphone
   */

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    // make an API call after every key press
    // but if the difference between two key strokes or api call <200ms
    // decline the api call <200ms
    // if less then call the api >200ms
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
    // getSearchSuggestions();
  }, [searchQuery]);

  /*
   * - key - i // first time
   * - render the component
   * - useEffect()
   * - start timer => make api call after 200 ms => new timer will generated after 200 ms
   *
   * - key - ip // second time
   * - destroy the component(useEffect return method call)
   * - re-render the component
   * - useEffect()
   * - start timer => make api call after 200 ms => new timer will generated after 200 ms
   */

  const getSearchSuggestions = async () => {
    //console.log("API CALL - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const searchData = await data.json();
    //console.log(searchData[1]);
    setSuggestions(searchData[1]);
    dispatch(
      cacheResults({
        [searchQuery]: searchData[1],
      })
    );
  };

  const getSearchVideo = async () => {
    //console.log(searchQuery);
    const data = await fetch(
      YOUTUBE_SEARCH_VIDEOS_API + searchQuery + "&key=" + process.env.REACT_APP_GOOGLE_API_KEY
    );
    const result = await data.json();
    //console.log(result.items);
    dispatch(addVideos(result.items));
    //setSearchQuery("");
  };

  const getautoSearchVideo = async (value) => {
    // console.log(autoval);
    const data = await fetch(
      YOUTUBE_SEARCH_VIDEOS_API + value + "&key=" + process.env.REACT_APP_GOOGLE_API_KEY
    );
    const result = await data.json();
   //console.log(result.items);
    dispatch(addVideos(result.items));
    setShowSuggestions(false);
    setSearchQuery(value);
  };

  return (
    <div className="grid grid-flow-col fixed w-full z-30 h-12">
      <div className="flex py-2 pl-5 items-center justify-start col-span-1 bg-white">
        <img
          className="h-7 cursor-pointer"
          src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
          alt="hamburger"
          onClick={toggleMenuHandler}
        />
        <img
          className="h-10 pl-2"
          src="https://www.pngkey.com/png/detail/314-3149308_youtube-podcast-icon-link-youtube-new-logo-png.png"
          alt="logo"
        />
      </div>
      <div className="py-2 col-span-10 bg-white">
        <div className="flex relative items-center">
          <input
            type="text"
            className="border w-3/5 py-2 pl-6 rounded-l-full border-l-gray-200 border-t-gray-200 border-b-gray-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            //  onBlur={() => setShowSuggestions(false)}
          />
          {showSuggestions && suggestions.length > 0 && (
            <button
              className=" px-5 py-3 text-lg absolute right-[526px] -top-1"
              onClick={() => setSearchQuery("")}
            >
              X
            </button>
          )}
          <button
            className="border border-gray-200 px-5 py-3 rounded-r-full bg-gray-200"
            onClick={() => getSearchVideo()}
          >
            <img
              className="h-4"
              src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
              alt="search icon"
            />
          </button>
        </div>
        {showSuggestions && suggestions.length > 0 && (
          <div className="fixed bg-white py-2 px-2 w-[33rem] z-20 shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions?.map((value, index) => {
                return (
                  <li
                    className="py-2 px-3 hover:bg-gray-200 cursor-pointer"
                    key={index}
                    onClick={() => getautoSearchVideo(value)}
                  >
                    {value}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="py-2 pr-5 flex justify-end col-span-1 items-start bg-white">
        <img
          className="h-9"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQna96LOHsB0K43Ybx1vGQyqq4IKX9k_1xW_am2qdgT-Q&s"
          alt="user icon"
        />
      </div>
    </div>
  );
};

export default Header;
