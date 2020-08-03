import React from "react";

const FormSignup = (props) => {};

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
export default FormSignup;
