import React, {useState, useEffect} from "react";

import announcementApi from "../../apis/announcement"

function ListAnnouncement() {
const [announcement,setAnnouncement] = useState({})

 useEffect(() => {
    (async function handleSubmit(){
        try{
            const response = await announcementApi.get("/")
            setAnnouncement(response)
        }
        catch (err){
            console.error(err)
        }
    })()
     },[])

    return(

        <div>
            {announcement.map((ann, i) =>{
                return (
                    <div  key={i}>
                    <p>{ann.title}</p>
                    <p>{ann.description}</p>
                    <p>{ann.imgPath}</p>
                    <p>{ann.value}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ListAnnouncement