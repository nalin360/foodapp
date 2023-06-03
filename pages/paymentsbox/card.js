import React, { useState } from 'react';
import {Text, View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const Payment = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    if (cardNumber === '' || expiryDate === '' || cvv === '') {
      Alert.alert('Error', 'Please fill in all the fields');
    } else if (!isValidCardNumber(cardNumber)) {
      Alert.alert('Error', 'Invalid card number');
    } else if (!isValidExpiryDate(expiryDate)) {
      Alert.alert('Error', 'Invalid expiry date');
    } else if (!isValidCvv(cvv)) {
      Alert.alert('Error', 'Invalid CVV');
    } else {
      // Perform payment processing logic here
      Alert.alert('Success', 'Payment successful');
    }
    Alert.alert('Success', 'Payment successful');
    navigation.navigate('MainPage')
  };

  const isValidCardNumber = (number) => {
    // Implement card number validation logic here
    return /^[0-9]{16}$/.test(number);
  };

  const isValidExpiryDate = (date) => {
    // Implement expiry date validation logic here
    return /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(date);
  };

  const isValidCvv = (cvv) => {
    // Implement CVV validation logic here
    return /^[0-9]{3,4}$/.test(cvv);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Card Details</Text>

      <TextInput
        style={styles.input}
        placeholder="Card Number"
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={(text) => setCardNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Expiry Date (MM/YY)"
        keyboardType="numeric"
        value={expiryDate}
        onChangeText={(text) => setExpiryDate(text)}
      />
      <TextInput
        style={styles.input}
        secureTextEntry ={true}
        placeholder="CVV"
        keyboardType="numeric"
        value={cvv}
        onChangeText={(text) => setCvv(text)}
      />
      <Button title="Pay" onPress={handlePayment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default Payment;
