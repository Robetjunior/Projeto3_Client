import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import authApi from "../../apis/auth";
import FormLogin from "./FormLogin";

function Login(props) {
  const history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(data) {
    console.log(data);
    try {
      const result = await authApi.post("/login", data);

      props.setUser({ ...result.data });

      localStorage.setItem("loggedInUser", JSON.stringify({ ...result.data }));

      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className=" form-body">
      
      <FormLogin
        handleSubmit={handleSubmit}
        setUser={setUser}
        user={user}
        buttonText="Entrar"
      />
    </div>
    
  );
}

export default Login;
