import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./chat.css";
import ChatFeed from "./chatroom/ChatFeed";
import Chatlogin from "./chatroom/Chatlogin";

// const API_KEY = process.env.REACT_APP_CHAT_ENGINE;

const Chatapp = () => {
  if (!localStorage.getItem("username")) return <Chatlogin />;

  return (
    <ChatEngine
      height="100vh"
      projectID="d5c981ec-e2ac-47f3-8176-8c54644eb09e"
      userName="mychatapp"
      userSecret="Nishantsaini@123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default Chatapp;