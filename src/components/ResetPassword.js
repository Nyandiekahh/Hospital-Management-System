import React, { useState } from 'react';

const ResetPassword = () => {
  const [credentials, setCredentials] = useState({ identifier: '', newPassword: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/users'); // Updated port here
    const users = await response.json();
    const user = users.find(user => 
      (user.role === 'patient' && user.birthCertNumber === credentials.identifier) ||
      (user.role === 'doctor' && user.medicalID === credentials.identifier) ||
      (user.role === 'admin' && user.username === credentials.identifier)
    );
    if (user) {
      user.password = credentials.newPassword;
      await fetch(`http://localhost:3001/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      alert('Password reset successful!');
    } else {
      alert('User not found');
    }
  };

  return (
    <div className="reset-password-form">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="identifier"
          placeholder="Birth Cert Number / Medical ID / Username"
          value={credentials.identifier}
          onChange={handleChange}
        />
        <input
          type="password"
          name="newPassword"
          placeholder="New Password"
          value={credentials.newPassword}
          onChange={handleChange}
        />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
