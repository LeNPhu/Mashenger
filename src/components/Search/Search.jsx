import React from "react";
import { Input } from "antd";

const Search = () => {
  const onSearch = () => {};

  return (
    <Input.Search
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
  );
};

export default Search;
