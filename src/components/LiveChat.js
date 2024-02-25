import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/functions";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API polling
      //console.log("API polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(1, 2),
        })
      );
    }, 10000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full p-3 border border-black bg-slate-100 h-[500px] rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((chat, index) => {
          return (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
          );
        })}
      </div>
      <form
        className="w-full p-3 border border-black rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name:"Jyoti Deshmukh",
            message:liveMessage,
          }))
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="border w-80 px-2"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
