// components/ChatWindow.js
import React from "react";

const ChatWindow = ({ chat }) => {
  console.log(chat);
  return (
    <div className="flex-1 p-6 overflow-y-auto sm:border-none border border-gray-200">
      {chat.map((msg, index) => (
        <div
          className={`flex mb-4 ${
            msg.sender === "user" ? "flex-row-reverse" : "flex-row"
          }`}
          key={index}
        >
          <img
            src="/avatar1.png"
            alt="avatar"
            className="w-12 h-12 rounded-full p-1"
          />
          <div
            className={`inline-block w-fit max-w-[40%] p-3 rounded-lg ${
              msg.sender === "user"
                ? "bg-blue-100 self-end text-right ml-2"
                : "bg-gray-100 self-start text-left mr-2"
            }`}
            style={{ display: "block" }}
          >
            <p className="break-words">{msg.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
