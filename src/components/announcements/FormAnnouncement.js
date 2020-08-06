import React from "react";

const FormAnnouncement = (props) => {
  function handleChange(event) {
    props.setAnnouncement({
      ...props.announcement,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    props.handleSubmit(props.announcement);
  }

  return (
    
      <div className="container-fluid mt-auto mr-auto d-flex justify-content-center align-items-center form-body">

      <div className="align ">

      <h1 className="text-center">Announcement</h1>
      <hr></hr>

        <div className="grid">
      <form  className="form login" onSubmit={handleSubmit}>
      <div className="form__field">
        <label htmlFor="exampleInputTitle"><i className="fa fa-user-circle-o" aria-hidden="true"></i></label>
        <input
          type="text"
          className="form-control form-control-lg form__input"
          id="announcementTitleField"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={props.announcement.title}
        />
      </div>

      <div className="form__field">
        <label htmlFor="exampleInputTitle"><i className="fa fa-user-circle-o" aria-hidden="true"></i></label>
        <input
          type="number"
          min="0"
          className="form-control form-control-lg form__input"
          id="announcementValueField"
          name="value"
          placeholder="Value 12000"
          onChange={handleChange}
          value={props.announcement.value}
        />
      </div>
      <div className="form__field">
        <label htmlFor="exampleInputOngId"><i className="fa fa-user-circle-o" aria-hidden="true"></i></label>
        <input
          type="file"
          className="form-control form-control-lg form__input"
          id="announcementOngIdField"
          name="imgPath"
          placeholder="Image"
          onChange={handleChange}
          value={props.announcement.imgPath}
        />
      </div>
      <div className="form__field">
        <label htmlFor="exampleInputDescription"><i className="fa fa-user-circle-o" aria-hidden="true"></i></label>
        <textarea
          rows="5"
          cols="50"
          className="form-control form-control-lg form__input"
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
    
    </div></div>
      </div>

 

  );
};

export default FormAnnouncement;
