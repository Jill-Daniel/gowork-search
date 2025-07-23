import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    skill: '',
    phone: '',
    location: '',
    description: '',
    image: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value.trimStart() }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({ ...prev, image: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.image) {
      setMessageType('error');
      setMessage('Please upload an image.');
      return;
    }

    setMessage('Registering...');
    setMessageType('');

    try {
      // Prepare correct payload for backend
      const payload = {
        name: formData.name,
        skill: formData.skill,
        contact: formData.phone,
        location: formData.location,
        description: formData.description,
        image_url: formData.image,
        email: formData.email,
        password: formData.password,
        role: 'worker', // You can change this if needed
      };

      // instead of localhost:
const res = await axios.post('https://gowork-backend.onrender.com/api/auth/register', formData);

      setMessageType('success');
      setMessage('✅ Registered successfully!');

      // Reset form
      setFormData({
        name: '',
        skill: '',
        phone: '',
        location: '',
        description: '',
        image: '',
        email: '',
        password: '',
      });
    } catch (error) {
      console.log(error.response?.data);
      setMessageType('error');
      setMessage(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="register-container">
      <h2>Register as Worker</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="skill"
          placeholder="Skill"
          value={formData.skill}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Experience"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>

      {message && (
        <p className={messageType === 'success' ? 'success-msg' : 'error-msg'}>
          {message}
        </p>
      )}
    </div>
  );
}

export default Register;
