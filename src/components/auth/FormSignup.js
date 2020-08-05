import React from "react";

const FormSignup = (props) => {
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
          <label htmlFor="exampleInputExamil1">Username</label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="authUsernameField"
            name="username"
            onChange={handleChange}
            value={props.user.username}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control form-control-lg"
            name="email"
            id="authEmailField"
            onChange={handleChange}
            value={props.user.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Password</label>
          <input
            type="password"
            className="form-control form-control-lg"
            name="password"
            id="authPasswordField"
            onChange={handleChange}
            value={props.user.password}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Address</label>
          <input
            type="text"
            className="form-control form-control-lg"
            name="address"
            id="authAddressField"
            onChange={handleChange}
            value={props.user.address}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Phone</label>
          <input
            type="number"
            className="form-control form-control-lg"
            name="phone"
            id="authPhoneField"
            onChange={handleChange}
            value={props.user.phone}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">CNPJ</label>
          <input
            type="number"
            className="form-control form-control-lg"
            name="cnpj"
            id="authCnpjField"
            onChange={handleChange}
            value={props.user.cnpj}
          />
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
export default FormSignup;
