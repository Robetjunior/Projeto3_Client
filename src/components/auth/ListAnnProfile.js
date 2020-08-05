import React from "react";

function ListAnnProfile(props) {
  return (
    <div>
      {props.adId.map((ann, i) => {
        return <div key={i}></div>;
      })}
    </div>
  );
}

export default ListAnnProfile;
