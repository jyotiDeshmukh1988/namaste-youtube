import React from "react";

const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-center">
      <img
        className="h-8"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQna96LOHsB0K43Ybx1vGQyqq4IKX9k_1xW_am2qdgT-Q&s"
        alt="user icon"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
