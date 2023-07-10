import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db } from "../../config/firebase/firebase";
import { storage } from "../../config/firebase/firebase";
import React from "react";
import { v4 as uuid } from "uuid";
import { sendMessage } from "./firestore";

export const uploadImg = (file, chatId, senderId) => {
  try {
    const storageRef = ref(storage, uuid());
    return uploadBytes(storageRef, file).then((snapshot) => {
      console.log(snapshot);
      getDownloadURL(ref(storage, snapshot.metadata.name)).then((url) => {
        sendMessage(chatId, url, senderId, "true");
        console.log(url);
      });
    });
  } catch (err) {
    console.log(err);
  }
};
export default storage;
