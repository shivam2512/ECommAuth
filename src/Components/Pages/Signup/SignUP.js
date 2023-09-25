import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import './Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('male'); // Default gender
  const [contactNumber, setContactNumber] = useState('');
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Create a new user account using Firebase Authentication via fetch()
      const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBf_JF2M7GAjef9MD923pZ7gkzntUw4_hE', {
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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error.message);
      }

      // Successfully signed up, now you can handle other operations like storing user data

      // Redirect the user to another page upon successful signup
      // You can use React Router's `history` or any other navigation method.

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSignup}>
        <p className="Form_Text">
          Already Have an account? <Link to="/login" id="login">Login</Link>
        </p>

        <div className="Form_Container">
          <h2>Sign Up</h2>

          <div className="Fields">
            <div>
              <label htmlFor="userName">Username:</label>
            </div>
            <div>
              <input
                type="text"
                id="userName"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

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

          <div className="Fields">
            <label htmlFor="gender">Gender:</label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={() => setGender('male')}
              required
            />
            <label htmlFor="genderMale" id="genderMale">Male</label>
            <input
              type="radio"
              id="genderFemale"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={() => setGender('female')}
              required
            />
            <label htmlFor="genderFemale">Female</label>
          </div>

          <div className="Fields">
            <div>
              <label htmlFor="contactNumber">Contact Number:</label>
            </div>
            <div>
              <input
                type="tel"
                id="contactNumber"
                pattern="[0-9]*"
                required
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
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

export default Signup;
