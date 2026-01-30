import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import './Signup.css';

const Signup = () => {
  const [role, setRole] = useState('job-seeker');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      
      // Store role
      localStorage.setItem('userRole', role);
      localStorage.setItem('userEmail', email);

      // Navigate based on role
      if (role === 'employer') {
        navigate('/employer');
      } else {
        navigate('/employee');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup-page">
      <Navbar />
      
      <div className="signup-container">
        <div className="signup-card">
            <div className="signup-header">
                <h2>Create Account</h2>
                <p>Join us as a {role === 'employer' ? 'Employer' : 'Job Seeker'}</p>
            </div>

            {error && <div className="error-message">{error}</div>}

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

            <form onSubmit={handleSubmit} className="signup-form">
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
                        minLength={6}
                    />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input 
                        type="password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        required
                    />
                </div>

                <button type="submit" className="signup-submit-btn">
                    Sign Up as {role === 'employer' ? 'Employer' : 'Job Seeker'}
                </button>
            </form>

            <div className="signup-footer">
                <p>Already have an account? <a href="/login">Log in</a></p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
