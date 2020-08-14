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
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  function filterAnnoun(event) {
    const term = event.currentTarget.value;
    if (!term) {
      return setAnnouncList([...announListBkp]);
    }
    const filtered = announList.filter((announ) => {
      return announ.title.toLowerCase().includes(term.toLowerCase());
    });

    return setAnnouncList([...filtered]);
  }

  return (
    <div className="input-group input-group-lg mb-4 d-flex justify-content-center" >
      <div className="w-50 pb-5">
       
          <div className="form__field">
        <label className="d-flex justify-content-center align-items-center back-label">
      <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            className="bi bi-search"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
            />
            <path
              fillRule="evenodd"
              d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
            />
          </svg>
          </label>
        <input
          type="text"
          className="form-control form-control-lg color"
          placeholder="Procure uma campanha"
          onKeyUp={filterAnnoun}
        />
      </div>
        </div>
      <div className="w-100">
        <ListAnnouncement announList={announList} />
      </div>
    </div>
  );
}

export default Search;
