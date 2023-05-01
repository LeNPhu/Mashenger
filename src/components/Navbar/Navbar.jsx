import React from "react";
import "./Style.scss";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/UserSlice/UserSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <span className="logo">Mashenger</span>
      </div>
      <div className="user-container">
        <img className="avatar" src={user.photoURL} />
        <span>Hello, {user.displayName}</span>
        <Button danger onClick={() => dispatch(logout())}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
