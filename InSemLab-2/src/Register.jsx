import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setDetails({ name, email, phone });
  };

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="tel"
          placeholder="Enter Phone"
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Register</button>
      </form>

      {details && (
        <div>
          <h3>Entered Details</h3>
          <p>Name: {details.name}</p>
          <p>Email: {details.email}</p>
          <p>Phone: {details.phone}</p>
        </div>
      )}
    </div>
  );
}

export default Register;