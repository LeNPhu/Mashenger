import React, { useRef } from "react";
import "./Style.scss";
import xtype from "xtypejs";
import Message from "../Message/Message";
import { useSelector } from "react-redux";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../../config/firebase/firebase";
import { useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
const Chat = () => {
  const { chatId } = useSelector((store) => store.chat);

  const [message, setMessage] = useState([]);
  const messageEndRef = useRef(null);
  const scrollToBottom = () => {
    if (messageEndRef) {
      messageEndRef.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  };

  useEffect(() => {
    try {
      const unsubscribe = onSnapshot(doc(db, "chats", chatId), (doc) => {
        setMessage(doc.data().messages);
        scrollToBottom();
      });
    } catch (err) {
      console.log(err);
    }
  }, [chatId]);
  if (!chatId) {
    return (
      <div className="chat-container">
        <div className="start-container">
          <AiOutlineMessage className="start-icon" size={50} />

          <p>Start a conversation with your friends!!</p>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="chat-container" ref={messageEndRef}>
        {message.map((data) => {
          return <Message data={data} />;
        })}
      </div>
      <div />
    </>
  );
};

export default Chat;
