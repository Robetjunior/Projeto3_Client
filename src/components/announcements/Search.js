import React, { useState, useEffect } from "react";

import announApi from "../../apis/announcement";
import ListAnnouncement from "./ListAnnouncement";

function Search() {
  const [announList, setAnnouncList] = useState([]);

  useEffect(() => {
    (async function sendAnnoun() {
      try {
        const response = await announApi.find("/");
        setAnnouncList([...response.data]);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    })();
  });

  function filterAnnoun(term) {
    if (!term) {
      return setAnnouncList([...announList]);
    }
    const filtered = announList.filter((announ) => {
      return announ.title.toLowerCase().includes(term.toLowerCase());
    });

    return setAnnouncList([...filtered]);
  }

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
      />
      <ListAnnouncement announList={announList} handleSearch={filterAnnoun} />
    </div>
  );
}

export default Search;
