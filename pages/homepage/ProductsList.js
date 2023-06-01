import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Product from './Product.js';

function ProductsList({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  const keyExtractor = (item) => {
    if (item && item._id) {
      return item._id.toString();
    }
    return '';
  };

  const renderProduct = ({ item }) => {
    const { _id, name, description, price, image } = item;

    return (
      <View>
        <Product
          id={_id} // Pass the correct id property
          name={name}
          description={description}
          price={price}
          image={image}
          onPress={() => {
            navigation.navigate('ProductDetails', {
              productId: _id, // Pass the correct productId
            });
          }}
        />
      </View>
    );
  };

  return (
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={keyExtractor}
      data={products}
      renderItem={renderProduct}
    />
  );
}

export default ProductsList;

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: '#eeeeee',
  },
  productsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
