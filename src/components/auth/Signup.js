import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import authApi from "../../apis/auth";

<<<<<<< HEAD
import FormSignup from './FormSignup';

function Signup() { 
    const history = useHistory();

    const [user, setUser] = useState({
        username = '',
        email = '',
        password = '',
        address = '',
        phone = '',
        cnpj = ''
    }) 

    async function handleSubmit(data){
        try{
            const result = await authApi.post('/signup', data);

            history.push('/login');
        } catch(err){
            console.error(err);
        }
=======
import FormSignup from "./FormSignup";

function Signup() {
  const history = useHistory();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    cnpj: "",
  });

  async function handleSubmit(data) {
    try {
      const result = await authApi.post("/signup", data);

      history.push("/login");
    } catch (err) {
      console.error(err);
>>>>>>> 0d05d2eb231d1cff6fef46d04ee0d5bc25a326dd
    }
  }

  return (
    <div>
      <h1>Signup</h1>
      <hr></hr>
      <FormSignup
        handleSubmit={handleSubmit}
        setUser={setUser}
        user={user}
        buttonText="Sign up"
      />
    </div>
  );
}

export default Signup;
