import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import React, { useEffect } from "react";
import { Button, Form } from "antd";
import "./Style.scss";
import {
  auth,
  facebookProvider,
  googleProvider,
} from "../../config/firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/UserSlice/UserSlice";

const Login = () => {
  const { email } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider).then((data) => {
      const user = data.user;
      //console.log(token, user);
      dispatch(login(user));
    });
  };
  // useEffect(() => {
  //   console.log(email);
  // }, [email]);
  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider).then((data) => {
      const user = data.user;

      dispatch(login(user));
    });
  };

  return (
    <>
      <div className="login-page">
        <div className="main-container">
          <div className="login-container">
            <p className="welcome">Welcome to Mashenger</p>
            <div className="btn-container">
              <Button block className="btn" onClick={handleGoogleSignIn}>
                <FcGoogle className="icon-gg icon" />
                Sign in with Google
              </Button>
              <Button
                block
                className="btn"
                type="primary"
                onClick={handleFacebookSignIn}
              >
                <FaFacebook className="icon-fb icon" />
                Sign in with Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
