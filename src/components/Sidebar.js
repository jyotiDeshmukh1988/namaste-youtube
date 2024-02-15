import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faVideo,
  faCameraRetro,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="w-1/5 shadow-lg p-4">
      <div className="flex flex-col gap-2 border-b-2 pb-3">
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
