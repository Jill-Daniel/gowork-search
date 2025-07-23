import React, { useState } from 'react';
import axios from 'axios';
import API_BASE from '../utils/api';

const RegisterWorker = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    skill: '',
    description: '',
    image_url: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE}/workers/register`, formData);
      alert("Worker registered successfully");
    } catch (err) {
      alert("Error registering worker");
    }
  };

  return (
    <div className="register-page">
      <h2>Register as Worker</h2>
      <form onSubmit={handleSubmit}>
        {Object.entries(formData).map(([key, val]) => (
          <input
            key={key}
            type="text"
            name={key}
            placeholder={key.replace('_', ' ').toUpperCase()}
            value={val}
            onChange={handleChange}
            required
          />
        ))}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterWorker;
