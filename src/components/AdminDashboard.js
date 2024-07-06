import React, { useState } from 'react';

const AdminDashboard = () => {
  const [user, setUser] = useState({
    role: '',
    name: '',
    birthCertNumber: '',
    medicalID: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/users', { // Updated port here
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    if (response.ok) {
      alert('User added successfully!');
    } else {
      alert('Failed to add user');
    }
  };

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="role"
          placeholder="Role (patient/doctor/admin)"
          value={user.role}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="birthCertNumber"
          placeholder="Birth Cert Number (for patients)"
          value={user.birthCertNumber}
          onChange={handleChange}
        />
        <input
          type="text"
          name="medicalID"
          placeholder="Medical ID (for doctors)"
          value={user.medicalID}
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Username (for admin)"
          value={user.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AdminDashboard;
