import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

const OrderHistoryScreen = ({ navigation }) => {
  const [orders, setOrders] = useState([
    {
      id: '1',
      address: 'FC Road',
      product: 'Pizza',
      productDesc: 'Delicious pizza with toppings',
      productPrice: '₹250',
      deliveryStatus: 'Delivered',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/800px-Pizza-3007395.jpg',
    },
    // Add more orders as needed
  ]);

  const renderOrderItem = ({ item }) => {
    return (
      <View style={styles.orderItem}>
        <Image source={{ uri: item.imageUrl }} style={styles.orderImage} />
        <Text style={styles.orderText}>{item.address}</Text>
        <Text style={styles.orderText}>{item.product}</Text>
        <Text style={styles.orderText}>{item.productDesc}</Text>
        <Text style={styles.orderText}>Price: {item.productPrice}</Text>
        <Text style={styles.orderText}>Status: {item.deliveryStatus}</Text>
      </View>
    );
  };

  const clearOrderHistory = () => {
    setOrders([]);
  };

  const addOrder = () => {
    const newOrder = {
      id: '2',
      address: 'Bund-Garden',
      product: 'Burger',
      productDesc: 'Juicy burger with cheese',
      productPrice: '₹899',
      deliveryStatus: 'Pending',
      imageUrl: 'https://www.sargento.com/assets/Uploads/Recipe/Image/burger_0.jpg',
    };
    setOrders(prevOrders => [...prevOrders, newOrder]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order History</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderOrderItem}
        contentContainerStyle={styles.orderList}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={clearOrderHistory}>
          <Text style={styles.buttonText}>Clear History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={addOrder}>
          <Text style={styles.buttonText}>Add Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderList: {
    flexGrow: 1,
  },
  orderItem: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  orderText: {
    fontSize: 16,
    marginBottom: 5,
  },
  orderImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OrderHistoryScreen;
