import React from "react";

function Register() {
  const handleOnSubmit = () => {
    console.log("ji");
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit} action="">
        <input
          type="text"
          name="firstName"
          placeholder="Enter your firstName"
        />
        <input type="text" name="lastName" placeholder="Enter your lastName" />
        <input type="email" name="email" placeholder="Enter your email" />
        <input
          type="pasword"
          name="password"
          placeholder="Enter your password"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Register;
