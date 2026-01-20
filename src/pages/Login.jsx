import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Login.css';

const Login = ({ initialRole = 'job-seeker' }) => {
  const [role, setRole] = useState(initialRole);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
     setRole(initialRole);
  }, [initialRole]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, validation and API call would go here
    
    // Store role
    localStorage.setItem('userRole', role);
    localStorage.setItem('userEmail', email); // Optional: remember email

    // Navigate based on role
    if (role === 'employer') {
        navigate('/employer');
    } else {
        navigate('/employee');
    }
  };

  return (
    <div className="login-page">
      <Navbar /> {/* Optional: Keep navigation accessible */}
      
      <div className="login-container">
        <div className="login-card">
            <div className="login-header">
                <h2>Welcome Back</h2>
                <p>Please log in to continue</p>
            </div>

            {/* Role Toggle */}
            <div className="role-toggle-container">
                <button 
                    className={`role-toggle-btn ${role === 'job-seeker' ? 'active' : ''}`}
                    onClick={() => setRole('job-seeker')}
                >
                    Job Seeker
                </button>
                <button 
                    className={`role-toggle-btn ${role === 'employer' ? 'active' : ''}`}
                    onClick={() => setRole('employer')}
                >
                    Employer
                </button>
            </div>

            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label>Email Address</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                    />
                </div>

                <button type="submit" className="login-submit-btn">
                    Log In as {role === 'employer' ? 'Employer' : 'Job Seeker'}
                </button>
            </form>

            <div className="login-footer">
                <p>Don't have an account? <a href="/register">Sign up</a></p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;