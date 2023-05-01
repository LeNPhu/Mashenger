import "./Style.scss";
import React from "react";

const Friends = (props) => {
  const { data } = props;
  return (
    <div className="friend-container">
      <img className="img-frame" src={data.photoURL} />

      <div className="friend-content">
        <div className="friend-name">{data.displayName}</div>
        <div className="friend-message">hi hi hi hi hi hi</div>
      </div>
    </div>
  );
};

export default Friends;
