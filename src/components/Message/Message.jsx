import { useSelector } from "react-redux";
import "./Style.scss";
import React from "react";
import { getUserImage } from "../../util/firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";

const Message = (props) => {
  const { data } = props;
  const { user } = useSelector((store) => store.user);
  const [img, setImg] = useState("");

  useEffect(() => {
    getUserImage(data.senderId).then((imgUrl) => setImg(imgUrl));
  }, []);

  return (
    <>
      <div
        className={`message-container ${
          data.senderId == user.uid ? "owner" : ""
        }`}
      >
        <div className="message-info">
          {/* <img src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&h=502&fit=crop&dpr=1" /> */}
          <img src={img} />
          <p>Just now</p>
        </div>
        <div className="message-content">
          <p>{data.text}</p>
        </div>
      </div>
    </>
  );
};

export default Message;
