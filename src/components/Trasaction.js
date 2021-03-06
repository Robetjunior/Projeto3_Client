import React, { useState } from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";
import authApi from "../apis/auth";

export default function Transaction() {
  const { AnunId } = useParams();
  const history = useHistory();

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    value: query.get("value"),
    AnunId: AnunId,
  });

  function handleChange(event) {
    setUser({
      ...user,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await authApi.post("transaction/create", user);

      setUser({ ...response });

      history.push(`/announcement/${AnunId}`);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="  container-fluid mt-auto mr-auto d-flex justify-content-center align-items-center form-body">
    <div className="align p-5 form-shadow">
    <h1 className="text-center">Donate</h1>
    <hr></hr>
    <form onSubmit={handleSubmit} className="form login">
      <div className="form__field">
        <label className="d-flex justify-content-center align-items-center" htmlFor="exampleInputExamil1"><i class="fa fa-user" aria-hidden="true"></i></label>
        <input
          type="text"
          className="form-control form-control-lg form__input"
          id="authUsernameField"
          name="firstName"
          placeholder="Nome ex: João"
          onChange={handleChange}
          value={user.firstName}
        />
      </div>
      <div className="form-group form__field">
        <label className="d-flex justify-content-center align-items-center"  htmlFor="exampleInputEmail1"><i class="fa fa-user" aria-hidden="true"></i></label>
        <input
          type="text"
          className="form-control form-control-lg form__input"
          name="lastName"
          placeholder="Sobrenome ex:Neves"
          id="authEmailField"
          onChange={handleChange}
          value={user.lastName}
        />
      </div>
      <div className="form__field">
        <label className="d-flex justify-content-center align-items-center"  htmlFor="exampleInputEmail1"><i class="fa fa-envelope" aria-hidden="true"></i></label>
        <input
          type="text"
          className="form-control form-control-lg form__input"
          name="email"
          id="authPasswordField"
          placeholder="Exemplo@email.com"
          onChange={handleChange}
          value={user.email}
        />
      </div>
      <div className="form__field">
        <label className="d-flex justify-content-center align-items-center"  htmlFor="exampleInputEmail1"><i class="fa fa-phone-square" aria-hidden="true"></i></label>
        <input
          type="number"
          className="form-control form-control-lg form__input"
          name="phone"
          id="authAddressField"
          placeholder="Phone "
          onChange={handleChange}
          value={user.phone}
        />
      </div>
      <div className="form__field">
        <label className="d-flex justify-content-center align-items-center"  htmlFor="exampleInputEmail1"><i class="fa fa-money" aria-hidden="true"></i></label>
        <input
          type="value"
          className="form-control form-control-lg form__input"
          name="value"
          id="authPhoneField"
          
          onChange={handleChange}
          value= {user.value}
        />
      </div>
      <div className="form__field">
      <input type="submit" value="Realizar Doação"/>
      </div>
    </form>
    </div>
    </div>
  );
}

