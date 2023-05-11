import React, { useEffect, useState } from "react";
import "./Style.scss";
import Friends from "../Friends/Friends";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase/firebase";

const Sidebar = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    try {
      const unsubscribe = onSnapshot(
        collection(db, "users"),
        (QuerySnapshot) => {
          const friend = [];
          QuerySnapshot.forEach((doc) => {
            friend.push(doc.data());
          });
          setFriends(friend);
        }
      );
    } catch (err) {
      console.log(err);
    }
  }, []);

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
  return (
    <div className="side-container">
      {friends.map((data) => {
        return <Friends data={data} />;
      })}
    </div>
  );
};

export default Sidebar;
