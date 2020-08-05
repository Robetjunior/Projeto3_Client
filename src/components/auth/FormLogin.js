import React from "react";

const FormLogin = (props) => {
  function handleChange(event) {
    props.setUser({
      ...props.user,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    props.handleSubmit(props.user);
  }

  return (
    <div className="container-fluid mt-auto mr-auto d-flex justify-content-center align-items-center ">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="authUsernameField"
            name="email"
            onChange={handleChange}
            value={props.user.email}
          />
        </div>
        <div>
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control form-control-lg"
            name="password"
            id="authPasswordField"
            onChange={handleChange}
            value={props.user.password}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="subit" className=" btn btn-lg btn-primary p-3 mt-3">
            {props.buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
