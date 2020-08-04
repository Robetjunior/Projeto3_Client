import React from "react";
import ListAnnouncement from "./ListAnnouncement";

function Search() {
  return (
    <div className="input-group input-grou-lg mb-4">
      <h1>Search</h1>
      <div className="input-group-prepend">
        <span className="input-group=text">
          <i className="fa fa-search" aria-hidden="true" />
        </span>
      </div>
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Search for a announcement"
        // onKeyUp={(event) => props.handleSearch(event.currentTarget.value)}
      />
      <ListAnnouncement />
    </div>
  );
}

export default Search;
