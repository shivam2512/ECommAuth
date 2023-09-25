import React, { useState } from 'react';
import Footer from '../../Footer/Footer';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBf_JF2M7GAjef9MD923pZ7gkzntUw4_hE', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error.message);
      }

      // The login was successful, you can handle the user's session here.
      console.log('Login successful');

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="Login_Container">
          <h2>Login</h2>

          <div className="Fields">
            <div>
              <label htmlFor="email">Email:</label>
            </div>
            <div>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="Fields">
            <div>
              <label htmlFor="password">Password:</label>
            </div>
            <div>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="button_container">
            <button type="submit">Submit</button>
          </div>

          {error && <p className="error-message">{error}</p>}
        </div>
      </form>
      <Footer />
    </>
  );
};

export default Login;
