// src/pages/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
 import API_BASE from "../utils/api";

function AdminDashboard() {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchWorkers = async () => {
      const token = localStorage.getItem('token');
      const role = localStorage.getItem('role');

      if (role !== 'admin') {
        setIsAdmin(false);
        setError('Access Denied: You are not authorized to view this page.');
        return;
      }

      setIsAdmin(true);
      try {
      

// ...

const res = await axios.get(`${API_BASE}/workers`, {

          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setWorkers(res.data);
      } catch (err) {
        setError('Failed to fetch workers');
      } finally {
        setLoading(false);
      }
    };

    fetchWorkers();
  }, []);

  if (!isAdmin) {
    return <div className="admin-denied"><h2>{error}</h2></div>;
  }

  return (
    <div className="admin-dashboard">
      <h2>Registered Workers</h2>
      {loading ? (
        <p>Loading workers...</p>
      ) : (
        <div className="worker-list">
          {workers.map(worker => (
            <div className="worker-card" key={worker.id}>
              <img src={worker.image} alt={worker.name} />
              <h3>{worker.name}</h3>
              <p><strong>Skill:</strong> {worker.skill}</p>
              <p><strong>Phone:</strong> {worker.phone}</p>
              <p><strong>Location:</strong> {worker.location}</p>
              <p><strong>Email:</strong> {worker.email}</p>
              <p><strong>Experience:</strong> {worker.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
