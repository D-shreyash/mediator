// components/MessageList.js
import React from "react";
import { FaPlus } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";

const MessageList = ({ messages, onSelectChat }) => {
  return (
    <div className="w-full p-4 overflow-y-auto h-screen border border-gray-200">
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <div className="flex items-center">
          <p className="text-xl font-bold mr-2">PENDING</p>
          <div className="flex items-center justify-center w-5 h-5 rounded-full bg-gray-200">
            <span className="text-xs text-center">
              <FaChevronDown />
            </span>
          </div>
          <div className="ml-2 bg-blue-100 text-blue-600 text-xs rounded-full px-2 py-1">
            12
          </div>
        </div>
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 hover:bg-blue-200 transition-all">
          <FaPlus className="text-blue-600" />
        </div>
      </div>

      <div className="flex items-center relative p-2">
        <input
          type="text"
          className="flex-grow rounded-full pl-10 py-1 border border-gray-500 focus:outline-none focus:ring-2 placeholder:text-black"
          placeholder="SEARCH MESSAGES"
        />
        <IoIosSearch className="absolute m-2 font-medium" />
      </div>
      {messages.map((message) => (
        <div
          key={message.id}
          className="flex items-center mb-4 p-2 bg-white rounded-lg shadow-sm hover:bg-blue-100 transition-colors border-b border-gray-200 cursor-pointer"
          onClick={() => onSelectChat(message)}
        >
          <img
            src={message.avatar}
            alt={message.name}
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-4 flex flex-row items-center justify-between w-full">
            <div>
              <p className="text-sm font-semibold">{message.name}</p>
              <p className="text-sm">{message.lastMessage}</p>
            </div>
            <span className="text-xs text-gray-500">{message.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
