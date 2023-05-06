import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const firstTimeLogin = (user) => {
  try {
    const docRef = doc(db, "user", user.uid);
    const docSnap = getDoc(docRef);
    if (docSnap.exists()) {
      updateDoc(docRef, {
        displayName: user.displayName,
        photoURL: user.photoURL,
      });
      console.log("user updated");
    } else {
      setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName: user.displayName,
        photoURL: user.photoURL,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const getFriends = createAsyncThunk(
  "friends/getFriends",

  async (data, thunkAPI) => {
    try {
      const friend = [];
      const res = await getDocs(collection(db, "users"));
      res.forEach((doc) => {
        friend.push(doc.data());
      });
      return friend;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.response);
    }
  }
);
export const getChat = async (friend) => {
  const user = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const combinedId =
    user.uid > friend.uid ? user.uid + friend.uid : friend.ui + user.uid;
  try {
    const res = await getDoc(doc(db, "chats", combinedId));

    if (!res.exists()) {
      await setDoc(doc(db, "chats", combinedId), {
        messages: [],
      });
    }
  } catch (err) {
    console.log(err);
  }
};
export const getMessage = (createAsyncThunk) => {
  "chat/getMessage",
    async (id) => {
      try {
      } catch (err) {
        console.log(err);
      }
    };
};
