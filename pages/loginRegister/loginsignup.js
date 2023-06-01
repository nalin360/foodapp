import React, { useState } from 'react';
import './loginsignup.css'

const LandingPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [createAccountMode, setCreateAccountMode] = useState(false);

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Error: Please enter a valid username and password');
      return;
    }

    // Handle login logic here
    console.log('Logging in with:', username, password);

    // Redirect to the home page upon successful login
    // Replace '/homepage' with the actual path of your home page
    window.location.href = '../pages/homepage';
  };

  const handleSignup = () => {
    if (
      username.trim() === '' ||
      password.trim() === '' ||
      firstName.trim() === '' ||
      lastName.trim() === '' ||
      phoneNumber.trim() === '' ||
      email.trim() === ''
    ) {
      alert('Error: Please fill in all the fields');
      return;
    }

    // Handle signup logic here
    console.log(
      'Creating account with:',
      firstName,
      lastName,
      phoneNumber,
      email,
      username,
      password
    );

    // Redirect to the home page upon successful account creation
    window.location.href = '../pages/homepage';
  };

  return (
    <div className="container">
      <h1 className="heading">Welcome to the App</h1>
      {!createAccountMode ? (
        <>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br/>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br/>
          <button onClick={handleLogin}>Login</button><br/>
          <button onClick={() => setCreateAccountMode(true)}>Create Account</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          /><br/>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          /><br/>
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          /><br/>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br/>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br/>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br/>
          <button onClick={handleSignup}>Create Account</button>
          <button onClick={() => setCreateAccountMode(false)}>Back to Login</button>
        </>
      )}
    </div>
  );
};

export default LandingPage;
