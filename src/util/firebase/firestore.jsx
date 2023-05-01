import React from "react";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../config/firebase/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const firstTimeLogin = (user) => {
  try {
    setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
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
