import { nanoid } from "nanoid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../Actions/Login";

function Register() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const dispatch = useDispatch();

  const state = useSelector((state) => state.userReducer);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { firstName, lastName, id: nanoid() };

    dispatch(logIn(data));

    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Enter your firstName"
          onChange={(e) => setfirstName(e.target.value)}
          //   value={firstName}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Enter your lastName"
          onChange={(e) => setlastName(e.target.value)}
          //   value={lastName}
          required
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Register;
