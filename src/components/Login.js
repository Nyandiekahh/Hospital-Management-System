import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [loginType, setLoginType] = useState(null);
  const [credentials, setCredentials] = useState({ identifier: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleTypeSelect = (type) => {
    setLoginType(type);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/users');
    const users = await response.json();
    console.log('Users:', users); // Debugging log
    const user = users.find(user => 
      (loginType === 'patient' && user.role === 'patient' && user.birthCertNumber === credentials.identifier && user.password === credentials.password) ||
      (loginType === 'doctor' && user.role === 'doctor' && user.medicalID === credentials.identifier && user.password === credentials.password) ||
      (loginType === 'admin' && user.role === 'admin' && user.username === credentials.identifier && user.password === credentials.password)
    );
    if (user) {
      const token = btoa(JSON.stringify({ ...user, exp: Date.now() + 1000 * 60 * 60 }));
      console.log('Generated token:', token); // Debugging log
      login(token);
      if (user.role === 'patient') navigate('/patient-dashboard');
      if (user.role === 'doctor') navigate('/doctor-dashboard');
      if (user.role === 'admin') navigate('/admin-dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      {!loginType ? (
        <div className="login-selection">
          <h2>Select Login Type</h2>
          <button onClick={() => handleTypeSelect('patient')}>Patient</button>
          <button onClick={() => handleTypeSelect('doctor')}>Doctor</button>
          <button onClick={() => handleTypeSelect('admin')}>Admin</button>
        </div>
      ) : (
        <div className="login-form">
          <h2>Login as {loginType.charAt(0).toUpperCase() + loginType.slice(1)}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="identifier"
              placeholder={loginType === 'patient' ? 'Birth Cert Number' : loginType === 'doctor' ? 'Medical ID' : 'Username'}
              value={credentials.identifier}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
            />
            <button type="submit">Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
