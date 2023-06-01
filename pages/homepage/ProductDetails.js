import React, { useEffect, useState, useContext } from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  StyleSheet,
} from 'react-native';
import { CartContext } from './CartContext.js';

export function ProductDetails({ route }) {
  console.log('route.params:', route.params);
  const { productId } = route.params;
  console.log('productId:', productId);

  const [product, setProduct] = useState(null);
  const { addItemToCart } = useContext(CartContext);
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/product/${productId}`);
        const productData = await response.json();
        console.log(productData);
        setProduct(productData);
      } catch (error) {
        console.error('Failed to fetch product details:', error);
        setProduct(null);
      }
    };

    fetchProduct();
  }, [productId]);

 

  if (!product) {
    return (
      <View>
        <Text>Loading product details...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Image style={styles.image} source={product.image} />

        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>$ {product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Button onPress={() => {}} title="Add to cart" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
});
