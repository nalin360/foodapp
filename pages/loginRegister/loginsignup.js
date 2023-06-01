import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
// import MainPage from '../homepage/MainPage';
const LandingPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [createAccountMode, setCreateAccountMode] = useState(false);

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Error: Please enter a valid username and password');
      return;
    }

    // Send login request to server
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Check login response from server
        if (data.success) {
          console.log('Login successful');
          // Redirect to the home page upon successful login
          // Replace 'MainPage' with the actual route name of your home page
          navigation.navigate('MainPage');
        } else {
          console.log('Login failed:', data.error);
          alert('Login failed. Please check your credentials.');
        }
      })
      .catch((error) => {
        console.log('Login error:', error);
        alert('An error occurred while logging in. Please try again.');
      });
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

    // Send signup request to server
    fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        firstName,
        lastName,
        phoneNumber,
        email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Check signup response from server
        if (data.success) {
          console.log('Account created successfully');
          // Redirect to the home page upon successful account creation
          // Replace 'MainPage' with the actual route name of your home page
          navigation.navigate('MainPage');
        } else {
          console.log('Account creation failed:', data.error);
          alert('Account creation failed. Please try again.');
        }
      })
      .catch((error) => {
        console.log('Account creation error:', error);
        alert('An error occurred while creating the account. Please try again.');
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to the App</Text>
      {!createAccountMode ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button title="Login" onPress={handleLogin} />
          <Button
            title="Create Account"
            onPress={() => setCreateAccountMode(true)}
          />
        </>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button title="Create Account" onPress={handleSignup} />
          <Button
            title="Back to Login"
            onPress={() => setCreateAccountMode(false)}
          />
        </>
      )}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
};

export default LandingPage;
