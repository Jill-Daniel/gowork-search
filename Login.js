import React, { useState } from 'react';
import axios from 'axios';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Logging in...');
    setMessageType('');

    const formData = { email, password }; // ✅ Define formData here before using it

    try {
      const res = await axios.post(
        'https://gowork-backend.onrender.com/api/auth/login',
        formData
      );

      // Save auth info
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('workerName', res.data.worker.name);

      setMessageType('success');
      setMessage(res.data.message || 'Login successful');

      if (onLogin) onLogin(res.data.worker);

    } catch (error) {
      setMessageType('error');
      setMessage(error.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <h2>Worker Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value.trimStart())}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>

      {message && (
        <p className={messageType === 'success' ? 'success-msg' : 'error-msg'}>
          {message}
        </p>
      )}
    </div>
  );
}

export default Login;
