import { Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/UserSlice/UserSlice";
import "./Style.scss";
import Navbar from "../../components/Navbar/Navbar";
import Chat from "../../components/Chat/Chat";
import Sidebar from "../../components/Sidebar/Sidebar";
import InputWindow from "../../components/InputWindow/InputWindow";
import { useEffect } from "react";
import { getFriends } from "../../util/firebase/firestore";
const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFriends());
  }, []);
  return (
    <div className="chat-page">
      <div className="nav-bar">
        <Navbar />
        <div className="chat-row">
          <Sidebar />
          <div className="chat-window">
            <Chat />
            <InputWindow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
