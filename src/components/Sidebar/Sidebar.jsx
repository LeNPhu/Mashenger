import React from "react";
import "./Style.scss";
import Friends from "../Friends/Friends";
import { useSelector } from "react-redux";
import xtype from "xtypejs";
const Sidebar = () => {
  const { friend } = useSelector((store) => store.friends);
  console.log(xtype(friend));

  return (
    <div className="side-container">
      {friend.map((data) => {
        return <Friends data={data} />;
      })}
    </div>
  );
};

export default Sidebar;
