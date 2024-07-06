import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const PatientDashboard = () => {
  const { user } = useContext(AuthContext);

  console.log('User data in PatientDashboard:', user); // Debugging log

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <div className="profile">
        <img src={user.image} alt="Profile" className="profile-image" />
        <h2>{user.name}</h2>
      </div>
      <h3>Health Records</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Sickness</th>
            <th>Doctor</th>
            <th>Hospital</th>
            <th>Prescribed Medicine</th>
            <th>Test Results</th>
          </tr>
        </thead>
        <tbody>
          {user.medicalHistory.map((record, index) => (
            <tr key={index}>
              <td>{record.date}</td>
              <td>{record.sickness}</td>
              <td>{record.doctor}</td>
              <td>{record.hospital}</td>
              <td>{record.prescribedMedicine}</td>
              <td>{record.testResults}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientDashboard;
