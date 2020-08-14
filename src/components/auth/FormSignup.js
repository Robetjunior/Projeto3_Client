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
      <div className="align form-shadow w-25 pb-5 pt-4 ">
      <h1 className="text-center">Cadastro</h1>
      <hr></hr>
        <div className="grid">
      <form onSubmit={handleSubmit} className="form login">
        <div className="form__field">
          <label className="d-flex justify-content-center align-items-center" htmlFor="exampleInputUserName1"><i className="fa fa-user-circle-o" aria-hidden="true"></i></label>
          <input
            type="text"
            className="form-control form__input"
            id="authUsernameField"
            name="username"
            placeholder="Usuário"
            onChange={handleChange}
            value={props.user.username}
          />
        </div>
        <div className="form__field">
      <label className="d-flex justify-content-center align-items-center" htmlFor="exampleInputEmail1">
      <i className="fa fa-envelope" aria-hidden="true"></i>
     </label>
 
      <input id="authUsernameField" type="text" name="email" className="form__input" onChange={handleChange} value={props.user.email} placeholder="Exemplo@email.com" required />
    </div>

    <div className="form__field">
      <label className="d-flex justify-content-center align-items-center" htmlFor="exampleInputPassword1"><i className="fa fa-lock" aria-hidden="true"></i></label>
      <input id="authPasswordField" type="password" name="password" className="form__input" onChange={handleChange}
            value={props.user.password} placeholder="Senha" required/>
    </div>
        <div className="form__field">
          <label className="d-flex justify-content-center align-items-center" htmlFor="exampleInputEmail1"><i className="fa fa-map-marker" aria-hidden="true"></i></label>
          <input
            type="text"
            className="form-control  form__input"
            name="address"
            placeholder="Endereço "
          
            id="authAddressField"
            onChange={handleChange}
            value={props.user.address}
          />
        </div>
        <div className="form__field">
          <label className="d-flex justify-content-center align-items-center" htmlFor="exampleInputEmail1"><i className="fa fa-phone-square" aria-hidden="true"></i></label>
          <input
            type="number"
            className="form-control form__input"
            name="phone"
            placeholder="Tel (55)55555-5555"
        
            id="authPhoneField"
            onChange={handleChange}
            value={props.user.phone}
          />
        </div>
        <div className="form__field">
          <label className="d-flex justify-content-center align-items-center" htmlFor="exampleInputEmail1"><i className="fa fa-industry" aria-hidden="true"></i></label>
          <input
            type="number"
            className="form-control form__input"
            name="cnpj"
            placeholder="Cnpj"
           
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
