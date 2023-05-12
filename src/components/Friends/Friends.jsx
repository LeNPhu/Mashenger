import { useDispatch, useSelector } from "react-redux";

import "./Style.scss";
import React, { useEffect, useState } from "react";
import { changeFriend } from "../../store/ChatSlice/ChatSlice";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase/firebase";

const Friends = (props) => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const { data } = props;
  const [lastMsg, setlastMsg] = useState();
  const combinedId =
    user.uid > data.uid ? user.uid + data.uid : data.ui + user.uid;
  useEffect(() => {
    try {
      const unsubscribe = onSnapshot(doc(db, "chats", combinedId), (doc) => {
        setlastMsg(doc.data().lastMessage);
        console.log(lastMsg);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div
      className="friend-container"
      onClick={() => dispatch(changeFriend(data))}
    >
      <img className="img-frame" src={data.photoURL} />

      <div className="friend-content">
        <div className="friend-name">{data.displayName}</div>
        <div className="friend-message">{lastMsg}</div>
      </div>
    </div>
  );
};

export default Friends;
