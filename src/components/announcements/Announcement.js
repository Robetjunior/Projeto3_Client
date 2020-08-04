import React ,{useState} from "react"

function Announcement(props){
    const [announcement, setAnnouncement] = useState(props.announcement)

    function handleChange(event){
        setAnnouncement(event.currentTarget.value)
    }
    return (
        <div className="">
            <div className="d-flex justify-content-start m-2">
                <img 
                className="pictures"
                src={props.imgPath}
                alt={`This is the ${props.title} announcement`}
                />
            </div>
        
            <div>
                <strong>{props.title}</strong>
                <span className="d-block">{props.description}</span>
            </div>


        </div>
    )
}

export default Announcement;