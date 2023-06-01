// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

// const LandingPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [email, setEmail] = useState('');
//   const [createAccountMode, setCreateAccountMode] = useState(false);

//   const handleLogin = () => {
//     if (username.trim() === '' || password.trim() === '') {
//       Alert.alert('Error', 'Please enter a valid username and password');
//       return;
//     }

//     // Handle login logic here
//     console.log('Logging in with:', username, password);
//   };

//   const handleSignup = () => {
//     if (
//       username.trim() === '' ||
//       password.trim() === '' ||
//       firstName.trim() === '' ||
//       lastName.trim() === '' ||
//       phoneNumber.trim() === '' ||
//       email.trim() === ''
//     ) {
//       Alert.alert('Error', 'Please fill in all the fields');
//       return;
//     }

//     // Handle signup logic here
//     console.log(
//       'Creating account with:',
//       firstName,
//       lastName,
//       phoneNumber,
//       email,
//       username,
//       password
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Welcome to the App</Text>
//       {!createAccountMode ? (
//         <>
//           <TextInput
//             style={styles.input}
//             placeholder="Username"
//             onChangeText={setUsername}
//             value={username}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             onChangeText={setPassword}
//             value={password}
//             secureTextEntry
//           />
//           <Button
//             title="Login"
//             onPress={handleLogin}
//           /><br/><br/>
//           <Button
//             title="Create Account"
//             onPress={() => setCreateAccountMode(true)}
//           />
//         </>
//       ) : (
//         <>
//           <TextInput
//             style={styles.input}
//             placeholder="First Name"
//             onChangeText={setFirstName}
//             value={firstName}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Last Name"
//             onChangeText={setLastName}
//             value={lastName}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Phone Number"
//             onChangeText={setPhoneNumber}
//             value={phoneNumber}
//             keyboardType="phone-pad"
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             onChangeText={setEmail}
//             value={email}
//             keyboardType="email-address"
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Username"
//             onChangeText={setUsername}
//             value={username}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             onChangeText={setPassword}
//             value={password}
//             secureTextEntry
//           />
//           <Button
//             title="Create Account"
//             onPress={handleSignup}
//           /> <br/><br/>
//           <Button
//             title="Back to Login"
//             onPress={() => setCreateAccountMode(false)}
//           />
//         </>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 16,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 16,
//     paddingHorizontal: 8,
//   },
// });

// export default LandingPage;





import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation for redirection

const LandingPage = () => {
  const navigation = useNavigation(); // Create useNavigation instance
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [createAccountMode, setCreateAccountMode] = useState(false);

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Please enter a valid username and password');
      return;
    }

    // Handle login logic here
    console.log('Logging in with:', username, password);

    // Redirect to the home page upon successful login
    // Replace 'Home' with the actual screen name of your home page
    navigation.navigate('Home');
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
      Alert.alert('Error', 'Please fill in all the fields');
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
    // Replace 'Home' with the actual screen name of your home page
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to the App</Text>
      {!createAccountMode ? (
        <>
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
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default LandingPage;