import React, { useState } from 'react';

const Signup = () => {
  const [credentials, setCredentials] = useState({
    role: 'patient',
    name: '',
    birthCertNumber: '',
    dateOfBirth: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/users', { // Updated port here
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });

    if (response.ok) {
      alert('Signup successful!');
    } else {
      alert('Signup failed');
    }
  };

  return (
    <div className="signup-form">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={credentials.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="birthCertNumber"
          placeholder="Birth Cert Number"
          value={credentials.birthCertNumber}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dateOfBirth"
          placeholder="Date of Birth"
          value={credentials.dateOfBirth}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
