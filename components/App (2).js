import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const App = () => {
  const handleDebitCreditCard = () => {
    // Logic for handling debit/credit card
    console.log('Debit/Credit Card selected');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Product Details</Text>
      {/* Display product details */}
      <Text style={styles.productName}>Product Name</Text>
      <Text style={styles.productPrice}>₹99.99</Text>

      <Text style={styles.codText}>Cash on Delivery available</Text>
      <TouchableOpacity style={styles.codButton}>
        <Text style={styles.buttonText}>Cash On Delivery</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.debitCreditCardButton} onPress={handleDebitCreditCard}>
        <Text style={styles.buttonText}>Debit/Credit Card</Text>
      </TouchableOpacity>
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productName: {
    fontSize: 16,
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 16,
    marginBottom: 20,
  },
  codText: {
    fontSize: 16,
    marginBottom: 10,
  },
  codButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  debitCreditCardButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
};

export default App;
