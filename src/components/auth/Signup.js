import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import authApi from "../../apis/auth";

import FormSignup from "./FormSignup";

function Signup() {
  const history = useHistory();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    cnpj: ""
  });

  async function handleSubmit(data) {
    try {
      const result = await authApi.post("/signup", data);

      history.push("/login");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="form-body">
     
      <FormSignup
        handleSubmit={handleSubmit}
        setUser={setUser}
        user={user}
        buttonText="Cadastrar"
      />
    </div>
  );
}

export default Signup;
