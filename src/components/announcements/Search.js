import React, { useState, useEffect } from "react";

import announApi from "../../apis/announcement";
import ListAnnouncement from "./ListAnnouncement";

let announListBkp = [];

function Search() {
  const [announList, setAnnouncList] = useState([]);

  useEffect(() => {
    (async function sendAnnoun() {
      try {
        const response = await announApi.get("/");
        setAnnouncList([...response.data]);
        announListBkp = [...response.data];
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  function filterAnnoun(event) {
    const term = event.currentTarget.value;
    if (!term) {
      console.log("CAIU NO IF");
      console.log(announListBkp);
      return setAnnouncList([...announListBkp]);
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
        onKeyUp={filterAnnoun}
      />
      <ListAnnouncement announList={announList} />
    </div>
  );
}

export default Search;
