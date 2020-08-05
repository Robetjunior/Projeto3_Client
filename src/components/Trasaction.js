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
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputExamil1">FirstName</label>
        <input
          type="text"
          className="form-control form-control-lg"
          id="authUsernameField"
          name="firstName"
          onChange={handleChange}
          value={user.firstName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">LastName</label>
        <input
          type="text"
          className="form-control form-control-lg"
          name="lastName"
          id="authEmailField"
          onChange={handleChange}
          value={user.lastName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input
          type="text"
          className="form-control form-control-lg"
          name="email"
          id="authPasswordField"
          onChange={handleChange}
          value={user.email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Phone</label>
        <input
          type="number"
          className="form-control form-control-lg"
          name="phone"
          id="authAddressField"
          onChange={handleChange}
          value={user.phone}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Value</label>
        <input
          type="value"
          className="form-control form-control-lg"
          name="value"
          id="authPhoneField"
          onChange={handleChange}
          value={user.value}
        />
      </div>
      <button type="submit" classvalue="btn btn-lg btn-primary">
        Doar
      </button>
    </form>
  );
}
