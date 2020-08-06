import React from "react";

function ListAnnProfile(props) {
  return (
    <div>
      <h1>{console.log(props)}</h1>
      <h1>{console.log(props.adId)}</h1>
      {/* {props.adId.map((annun, i) => {
        return (
          <div key={i}>
            <img src={annun.imgPath} alt="Announcement" />
            <h1>Title: {annun.title}</h1>
            <p> Total Value: {annun.value}</p>
          </div>
        );
      })} */}
    </div>
  );
}

export default ListAnnProfile;
