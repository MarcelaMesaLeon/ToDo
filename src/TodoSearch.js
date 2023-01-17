import React from "react";
import "./TodoSearch.css";

function TodoSearch({ valueSearch, setValueSearch }) {
  const onSearchValueOnChange = (event) => {
    setValueSearch(event.target.value);
  };

  return (
    <center>
      <input
        className="TodoSearch"
        placeholder="Cebolla"
        value={valueSearch}
        onChange={onSearchValueOnChange}
      />
    </center>
  );
}

export { TodoSearch };
