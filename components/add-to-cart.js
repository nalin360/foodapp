import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const cart = () => {

  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];
  
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedItems = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedItems.filter((item) => item.quantity > 0));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const renderProduct = (product) => (
    <View key={product.id} style={styles.productItem}>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>Price: ₹{product.price}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={[styles.quantityButton, styles.quantityButtonLeft]}
          onPress={() => removeFromCart(product.id)}
        >
          <Text>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{product.quantity || 0}</Text>
        <TouchableOpacity
          style={[styles.quantityButton, styles.quantityButtonRight]}
          onPress={() => addToCart(product)}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products</Text>
      {products.map(renderProduct)}
      <Text style={styles.heading}>Cart</Text>
      {cartItems.length > 0 ? (
        cartItems.map(renderProduct)
      ) : (
        <Text>Your cart is empty</Text>
      )}
      <Text style={styles.totalPrice}>Total Price: ₹{calculateTotalPrice()}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '80%',
    marginBottom: 10,
  },
  productName: {
    fontWeight: 'bold',
  },
  productPrice: {
    color: 'gray',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: 'lightblue',
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButtonLeft: {
    marginRight: 5,
  },
  quantityButtonRight: {
    marginLeft: 5,
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalPrice: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default cart;