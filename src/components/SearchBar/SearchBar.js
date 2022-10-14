import React from "react";
import "./searchBar.css";

function SearchBar() {
  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search A City"
          onChange={handleChange}
        ></input>
        <button type="submit">Search</button>
      </form>
      <aside>
        {list.map((item) => (
          <button key={item}>{item}</button>
        ))}
      </aside>
    </>
  );
}

export default SearchBar;
