import React from "react";

const Button = ({name}) => {
  return (
    <div>
      <button className="px-6 py-2 bg-gray-300 rounded">{name}</button>
    </div>
  );
};

export default Button;
