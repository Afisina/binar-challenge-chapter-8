import React, { useState } from "react";
import "./form.css";

function EditPlayer(props) {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onEdit(email, newPassword, confirmPassword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 class="title">Change Password</h1>
      <label>
        Email :
        <br />
        <input type="email" name="email" className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        New password :
        <br />
        <input type="password" name="password" className="input-field" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      </label>
      <label>
        Confirm password :
        <br />
        <input type="password" name="password" className="input-field" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </label>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

export default EditPlayer;
