import { useSelector } from "react-redux";
import "./Style.scss";
import React from "react";
import { getUserImage } from "../../util/firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import moment from "moment/moment";
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
          <img src={img} />

          <p>
            {data.date.toMillis() > moment().startOf("day").valueOf()
              ? moment(data.date.toMillis()).format("HH:mm")
              : moment(data.date.toMillis()).format("MMM DD, YYYY")}
          </p>
        </div>
        <div className="message-content">
          <p>{data.text}</p>
        </div>
      </div>
    </>
  );
};

export default Message;
