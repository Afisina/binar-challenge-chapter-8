import e from "cors";
import React, { useState } from "react";
import "./form.css";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 class="title">Login Page</h1>
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
        Login
      </button>
      <a href="/updatePlayer" class="link">
        Forgot the password?
      </a>
    </form>
  );
}

export default LoginForm;
