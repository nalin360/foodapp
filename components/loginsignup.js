import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LandingPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [createAccountMode, setCreateAccountMode] = useState(false);

const handleLogin = () => {
  // Prepare the request body
  const requestBody = {
    username: username,
    password: password,
  };

  // Send the POST request to the login endpoint
  fetch('http://localhost:5000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
};
  const handleSignup = () => {
    // Prepare the request body
    const requestBody = {
      username: username,
      password: password,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
    };
  
    // Send the POST request to the signup endpoint
    fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);
        // You can add logic here to handle success or failure of the signup process
        // For example, displaying a success message or redirecting to a different screen
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
        // You can add logic here to handle error cases
        // For example, displaying an error message to the user
      });
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to the App</Text>
      {createAccountMode ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            onChangeText={setFirstName}
            value={firstName}
          
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            onChangeText={setLastName}
            value={lastName}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            onChangeText={setPhoneNumber}
            value={phoneNumber}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
          />
        </>
      ) : null}
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />

      <Button 
      // title={!createAccountMode ? 'Create Account' : 'Back to Login'} 
      title='Back to Login'
      onPress={handleLogin} />

      {/* <Button title={createAccountMode ? 'Create Account' : 'Login'} 
      onPress={createAccountMode ? handleCreateAccount : handleLogin}/> */}
      <Button
        title={!createAccountMode ? 'Create Account' : 'Back to Login'}
        // title='Create Account'
        onPress={() => {
          handleSignup();
          setCreateAccountMode(!createAccountMode);
        }}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'green',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },

});

export default LandingPage;