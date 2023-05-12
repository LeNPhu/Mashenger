import "./Style.scss";
import React from "react";
import Input from "antd/es/input/Input";
import { Button, Upload } from "antd";
import { AiOutlineUpload, AiOutlineSend } from "react-icons/ai";
import { sendMessage } from "../../util/firebase/firestore";
import { useSelector } from "react-redux";
import { useState } from "react";
const InputWindow = () => {
  const [message, setMessage] = useState("");
  const { user } = useSelector((store) => store.user);
  const { chatId } = useSelector((store) => store.chat);
  const handleChange = (e) => {
    setMessage(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      sendMessage(chatId, e.target.value, user.uid);
      setMessage("");
    }
  };
  return (
    <div className="input-container">
      <Input
        className="input"
        placeholder="Type something..."
        onKeyDown={handleSubmit}
        onChange={handleChange}
        value={message}
      />
      <div className="btn-container">
        {/* <AiOutlineUpload className="btn btn-upload">
          <Upload>
            <Button className="btn-upload btn"></Button>
          </Upload>
        </AiOutlineUpload>

        <AiOutlineSend className="btn btn-send">
          <Button className=" btn"></Button>
        </AiOutlineSend> */}
        <Upload>
          <button className="btn-upload btn">
            <AiOutlineUpload className="icon" />
          </button>
        </Upload>
        {/* <button className="btn btn-send">
          <AiOutlineSend className="icon" />
        </button> */}
      </div>
    </div>
  );
};

export default InputWindow;
