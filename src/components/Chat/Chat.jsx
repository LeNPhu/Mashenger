import React from "react";
import "./Style.scss";
import xtype from "xtypejs";
import Message from "../Message/Message";
import { useSelector } from "react-redux";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../../config/firebase/firebase";
import { useState } from "react";
const Chat = () => {
  const { chatId } = useSelector((store) => store.chat);

  const [message, setMessage] = useState([]);
  useEffect(() => {
    try {
      const unsubscribe = onSnapshot(doc(db, "chats", chatId), (doc) => {
        setMessage(doc.data().messages);
      });
    } catch (err) {
      console.log(err);
    }
  }, [chatId]);
  return (
    <div className="chat-container">
      {message.map((data) => {
        return <Message data={data} />;
      })}
    </div>
  );
};

export default Chat;
