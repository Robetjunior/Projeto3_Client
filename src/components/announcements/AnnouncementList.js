import React from "react";
import Announcement from "./Announcement"

function AnnouncementList(props) {
    return(
        <div>
            {props.announcementList.map((announcement, i) =>{
                return (
                    <Announcement
                    key={i}
                    name={announcement.title}
                    description={announcement.description}
                    imgPath={announcement.imgPath}
                    value={announcement.value}

                    />
                )
            })}
        </div>
    )
}

export default AnnouncementList