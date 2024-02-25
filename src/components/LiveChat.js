import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  useEffect(() => {
    const i = setInterval(() => {
        // API polling
        console.log("API polling");
    }, 2000);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="w-full h-[500px] p-2 border border-black bg-slate-100 rounded-lg">
      <ChatMessage
        name="Akshay Saini"
        message="This is namaste react live! 🙏"
      />
    </div>
  );
};

export default LiveChat;
