import { useDispatch, useSelector } from "react-redux";

import "./Style.scss";
import React from "react";
import { changeFriend } from "../../store/ChatSlice/ChatSlice";

const Friends = (props) => {
  const dispatch = useDispatch();
  const { data } = props;

  return (
    <div
      className="friend-container"
      onClick={() => dispatch(changeFriend(data))}
    >
      <img className="img-frame" src={data.photoURL} />

      <div className="friend-content">
        <div className="friend-name">{data.displayName}</div>
        <div className="friend-message">hi hi hi hi hi hi</div>
      </div>
    </div>
  );
};

export default Friends;
