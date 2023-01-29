import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../Actions/Register";

function Register() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { firstName, lastName, email, password };

    dispatch(signUp(data));

    // console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Enter your firstName"
          onChange={(e) => setfirstName(e.target.value)}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Enter your lastName"
          onChange={(e) => setlastName(e.target.value)}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Register;
