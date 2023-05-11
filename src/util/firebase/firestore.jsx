import {
  QuerySnapshot,
  Timestamp,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

export const firstTimeLogin = (user) => {
  try {
    const docRef = doc(db, "user", user.uid);
    const docSnap = getDoc(docRef);
    if (docSnap.exists()) {
      updateDoc(docRef, {
        displayName: user.displayName,
        photoURL: user.photoURL,
      });
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

// export const getFriends = createAsyncThunk(
//   "friends/getFriends",

//   async () => {
//     try {
//       const unsubscribe = onSnapshot(
//         collection(db, "users"),
//         (QuerySnapshot) => {
//           const friend = [];
//           QuerySnapshot.forEach((doc) => {
//             friend.push(doc.data());
//           });
//           console.log(friend);
//           return friend;
//         }
//       );
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );
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

export const sendMessage = async (chatId, text, senderId) => {
  try {
    await updateDoc(doc(db, "chats", chatId), {
      messages: arrayUnion({
        id: uuid(),
        text,
        senderId,
        date: Timestamp.now(),
      }),
    });
  } catch (err) {
    console.log(err);
  }
};
export const getUserImage = async (uid) => {
  try {
    const docsnap = await getDoc(doc(db, "users", uid));
    const img = docsnap.data().photoURL;
    return img;
  } catch (err) {
    console.log(err);
  }
};
