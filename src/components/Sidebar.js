import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faVideo,
  faCameraRetro,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => {
    return store.app.isMenuOpen;
  });
  // early return
  if (!isMenuOpen) return null;
  return (
    <div className="shadow-lg p-4 w-3/12">
      <div className="flex flex-col gap-2 border-b-2 pb-3">
        <div className="w-24">
          <Link to="/" className="cursor-pointer">
            <FontAwesomeIcon icon={faHouseChimney} className="pr-2" />
            Home
          </Link>
        </div>
        <div>
          <FontAwesomeIcon icon={faVideo} className="pr-2" />
          Shorts
        </div>
        <div>
          <FontAwesomeIcon icon={faCameraRetro} className="pr-2" />
          Subscriptions
        </div>
      </div>
      <div className="flex flex-col gap-2 border-b-2 pb-3 pt-3">
        <div>
          <FontAwesomeIcon icon={faVideo} className="pr-2" />
          Shorts
        </div>
        <div>
          <FontAwesomeIcon icon={faCameraRetro} className="pr-2" />
          Subscriptions
        </div>
      </div>
      <div className="flex flex-col gap-2 border-b-2 pb-3 pt-3">
        <div>
          <FontAwesomeIcon icon={faHouseChimney} className="pr-2" />
          Home
        </div>
        <div>
          <FontAwesomeIcon icon={faVideo} className="pr-2" />
          Shorts
        </div>
        <div>
          <FontAwesomeIcon icon={faCameraRetro} className="pr-2" />
          Subscriptions
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
