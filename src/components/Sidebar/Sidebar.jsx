import React, { useEffect, useState } from "react";
import "./Style.scss";
import Friends from "../Friends/Friends";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../config/firebase/firebase";
import { Input } from "antd";

const Sidebar = () => {
  const [friends, setFriends] = useState([]);
  const [search, setSearch] = useState("");
  const [temp, setTemp] = useState([]);
  useEffect(() => {
    try {
      const unsubscribe = onSnapshot(
        query(collection(db, "users")),
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
  useEffect(() => {
    setTemp(friends);
  }, [friends]);
  useEffect(() => {
    const tmp = temp.filter((item) =>
      item.displayName.toLowerCase().includes(search)
    );
    setTemp(tmp);
    console.log(temp);
  }, [search]);
  const onSearch = (value) => {
    setSearch(value);
  };

  console.log(friends);
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
      <Input.Search
        placeholder="Find your friends"
        allowClear
        onSearch={onSearch}
        className="search"
        size="large"
      ></Input.Search>
      <div>
        {temp.map((data) => {
          return <Friends data={data} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
