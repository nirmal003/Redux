import React from "react";

function Register() {
  const handleOnSubmit = (value) => {
    console.log(value);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Enter your firstName"
          onChange={(e) => e.target.value}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Enter your lastName"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Register;
