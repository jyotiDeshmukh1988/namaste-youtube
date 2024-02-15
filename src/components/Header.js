import React from "react";

const Header = () => {
  return (
    <div className="grid grid-flow-col px-5 py-2 shadow-lg">
      <div className="flex items-center justify-start col-span-1">
      <img className="h-6"
        src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"
        alt="hamburger"
      />
      <img className="h-6 pl-2"
        src="https://www.pngkey.com/png/detail/314-3149308_youtube-podcast-icon-link-youtube-new-logo-png.png"
        alt="logo"
      />
      </div>
      <div className="col-span-10 flex items-center justify-center">
        <input type="text" className="border w-1/2 py-2 rounded-l-full border-gray-400"/>
        <button className="border border-gray-400 px-5 py-3 rounded-r-full bg-gray-300"><img className="h-4" src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png" alt="search icon"/></button>
      </div>
      <div className="flex justify-end col-span-1 items-center">
      <img className="h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQna96LOHsB0K43Ybx1vGQyqq4IKX9k_1xW_am2qdgT-Q&s" alt="user icon"/>
      </div>
    </div>
  );
};

export default Header;
