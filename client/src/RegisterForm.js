import React, { useState } from "react";
import "./form.css";

function RegisterForm(props) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onRegister(email, username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 class="title">Register Account</h1>
      <label>
        Email :
        <br />
        <input type="email" name="email" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Username :
        <br />
        <input type="text" name="username" className="input-field" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password :
        <br />
        <input type="password" name="password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit" className="submit-button">
        Register
      </button>
      <a href="/login" class="link">
        Already have account?
      </a>
    </form>
  );
}

export default RegisterForm;
