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
    <div className="container-fluid mt-auto mr-auto d-flex justify-content-center align-items-center form-body ">
      <div className="align ">
      <h1 className="text-center">Signup</h1>
      <hr></hr>
        <div className="grid">
      <form onSubmit={handleSubmit} className="form login">
        <div className="form__field">
          <label htmlFor="exampleInputUserName1"><i className="fa fa-user-circle-o" aria-hidden="true"></i></label>
          <input
            type="text"
            className="form-control form-control-lg form__input"
            id="authUsernameField"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={props.user.username}
          />
        </div>
        <div className="form__field">
      <label htmlFor="exampleInputEmail1">
      <i className="fa fa-envelope" aria-hidden="true"></i>
     </label>
 
      <input id="authUsernameField" type="text" name="email" className="form__input" onChange={handleChange} value={props.user.email} placeholder="Example@email.com" required />
    </div>

    <div className="form__field">
      <label htmlFor="exampleInputPassword1"><i className="fa fa-lock" aria-hidden="true"></i><span className="hidden">Password</span></label>
      <input id="authPasswordField" type="password" name="password" className="form__input" onChange={handleChange}
            value={props.user.password} placeholder="Password" required/>
    </div>
        <div className="form__field">
          <label htmlFor="exampleInputEmail1"><i className="fa fa-map" aria-hidden="true"></i></label>
          <input
            type="text"
            className="form-control form-control-lg form__input"
            name="address"
            placeholder="Adress Avenida Paulista  "
          
            id="authAddressField"
            onChange={handleChange}
            value={props.user.address}
          />
        </div>
        <div className="form__field">
          <label htmlFor="exampleInputEmail1"><i className="fa fa-phone-square" aria-hidden="true"></i></label>
          <input
            type="number"
            className="form-control form-control-lg form__input"
            name="phone"
            placeholder="Tel (55)55555-5555"
        
            id="authPhoneField"
            onChange={handleChange}
            value={props.user.phone}
          />
        </div>
        <div className="form__field">
          <label htmlFor="exampleInputEmail1"><i className="fa fa-industry" aria-hidden="true"></i></label>
          <input
            type="number"
            className="form-control form-control-lg form__input"
            name="cnpj"
            placeholder="Cnpj 01234567890123"
           
            id="authCnpjField"
            onChange={handleChange} 
            value={props.user.cnpj}
          />
        </div>
        
        <div className="form__field">
      <input type="submit" value={props.buttonText}/>
      </div>
        
      </form>
    </div>
    </div>
    </div>
  );
};
export default FormSignup;
