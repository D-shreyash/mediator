import React, { useState } from "react";
import MessageList from "./components/ComponentsForChatt/MessageList";
import ChatWindow from "./components/ComponentsForChatt/ChatWindow";
import ChatInput from "./components/ComponentsForChatt/ChatInput";
import UserProfile from "./components/ComponentsForChatt/UserProfile";
import { NavBar } from "./components/NavBar";
import { FaArrowLeft } from "react-icons/fa";

const ChattingPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Kristin Watson",
      avatar: "/avatar1.png",
      time: "12m",
      lastMessage: "Shampoo Ad",
      status: "ONLINE",
      chat: [
        { sender: "user", text: "Hi, I am interested" },
        {
          sender: "Kristin",
          text: "Are you okay to work on xxxx amount because",
        },
        { sender: "user", text: "yes" },
      ],
    },
    {
      id: 2,
      name: "BinCO",
      avatar: "/avatar2.png",
      time: "12m",
      lastMessage: "Hair Cleanser",
      status: "OFFLINE",
      chat: [
        { sender: "user", text: "Hello, how are you?" },
        { sender: "BinCO", text: "I am fine, thank you!" },
      ],
    },
    {
      id: 3,
      name: "Robert Fox",
      avatar: "/avatar3.png",
      time: "12m",
      lastMessage: "Cleaner",
      status: "AWAY",
      chat: [
        { sender: "user", text: "Can you send the cleaner today?" },
        { sender: "Robert", text: "Sure, it's on the way!" },
      ],
    },
    {
      id: 4,
      name: "Kathryn Murphy",
      avatar: "/avatar3.png",
      time: "12m",
      lastMessage: "Hair Cleanser",
      status: "ONLINE",
      chat: [
        { sender: "user", text: "Is the hair cleanser available?" },
        { sender: "Kathryn", text: "Yes, we have it in stock." },
      ],
    },
    {
      id: 5,
      name: "Theresa Webb",
      avatar: "/avtar.png",
      time: "12m",
      lastMessage: "Shampoo",
      status: "OFFLINE",
      chat: [
        { sender: "user", text: "Can you suggest a good shampoo?" },
        { sender: "Theresa", text: "Sure, we have several options." },
      ],
    },
    // Add more messages here
  ]);

  const [selectedChat, setSelectedChat] = useState(null);

  const handleSend = (message) => {
    if (selectedChat) {
      const updatedMessages = messages.map((msg) =>
        msg.id === selectedChat.id
          ? { ...msg, chat: [...msg.chat, { sender: "user", text: message }] }
          : msg
      );
      setMessages(updatedMessages);
      setSelectedChat({
        ...selectedChat,
        chat: [...selectedChat.chat, { sender: "user", text: message }],
      });
    }
  };

  const handleSelectChat = (message) => {
    setSelectedChat(message);
  };

  const handleBackToMessages = () => {
    setSelectedChat(null);
  };

  return (
    <div className="flex h-screen flex-col">
      <NavBar />
      <div className="flex px-3 w-full">
        {/* Message List: Show on small screens, hide on medium screens when a chat is selected */}
        <div
          className={`w-full md:w-[25%] ${
            selectedChat ? "hidden md:block" : "block"
          }`}
        >
          <MessageList messages={messages} onSelectChat={handleSelectChat} />
        </div>

        {/* Chat Window, Input, and UserProfile: Always visible on larger screens; show on medium screens when a chat is selected */}
        <div
          className={`w-full md:w-[75%] ${
            selectedChat ? "block" : "hidden md:block"
          }`}
        >
          {selectedChat ? (
            <div className="flex flex-col w-full h-full">
              <div className="flex items-center p-4 md:hidden">
                <button
                  onClick={handleBackToMessages}
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <FaArrowLeft className="mr-2" /> Back to Messages
                </button>
              </div>
              <div className="flex flex-grow">
                <div className="w-[70%] mx-auto">
                  <ChatWindow chat={selectedChat.chat} />
                  <ChatInput onSend={handleSend} />
                </div>
                <div className="w-[30%] hidden sm:block">
                  <UserProfile
                    name={selectedChat.name}
                    avatar={selectedChat.avatar}
                    status={selectedChat.status}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center h-full">
              <p className="text-gray-500 text-2xl pt-30vh">
                Select a chat to start messaging
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChattingPage;
