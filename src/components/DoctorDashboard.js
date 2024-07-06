import React, { useState, useEffect } from 'react';

const DoctorDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const response = await fetch('http://localhost:3001/users'); // Updated port here
      const data = await response.json();
      const patientsData = data.filter(user => user.role === 'patient');
      setPatients(patientsData);
    };

    fetchPatients();
  }, []);

  useEffect(() => {
    const results = patients.filter(patient =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPatients(results);
  }, [searchTerm, patients]);

  return (
    <div className="dashboard">
      <h2>Doctor's Dashboard</h2>
      <p>Welcome to your dashboard. You can search for patient records below.</p>
      <input
        type="text"
        placeholder="Search patients..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredPatients.map(patient => (
          <li key={patient.birthCertNumber}>
            {patient.name} ({patient.birthCertNumber})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorDashboard;
