import React from "react";

const FormAnnouncement = (props) => {
  function handleChange(event) {
    if (event.currentTarget.files) {
      return props.setAnnouncement({
        ...props.task,
        [event.currentTarget.name]: event.currentTarget.files[0],
      });
    }

  props.setAnnouncement({
    ...props.announcement,
    [event.currentTarget.name]: event.currentTarget.value,
  });
}


  async function handleSubmit(event) {
    event.preventDefault();

    const ImageUrl = await props.handleFileUpload(props.announcement.ImageUrl);

    props.setAnnouncement({
      ...props.announcement,
      ImageUrl,
    });
  }

  return (
      <div className="container-fluid mt-auto mr-auto d-flex justify-content-center align-items-center ">
      
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputTitle">Title</label>
        <input
          type="text"
          className="form-control form-control-lg"
          id="announcementTitleField"
          name="title"
          onChange={handleChange}
          value={props.announcement.title}
        />
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputTitle">Value</label>
        <input
          type="number"
          min="0"
          className="form-control form-control-lg"
          id="announcementValueField"
          name="value"
          onChange={handleChange}
          value={props.announcement.value}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputOngId">Imagem</label>
        <input
          type="file"
          className="form-control form-control-lg"
          id="imgPath"
          name="imgPath"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputDescription">Description</label>
        <textarea
          rows="5"
          cols="50"
          className="form-control form-control-lg"
          id="announcementDescriptionField"
          name="description"
          onChange={handleChange}
          value={props.announcement.description}
        >
          {" "}
          Enter description here ...{" "}
        </textarea>
      </div>
      <div className="d-flex justify-content-center">
      <button type="subit" className=" btn btn-lg btn-primary p-3">
        {props.buttonText}
      </button>
      </div>
    </form>
    </div>
  );
};


export default FormAnnouncement;
