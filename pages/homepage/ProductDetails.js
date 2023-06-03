import React, { useEffect, useState, 
  // useContext 
} from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
// import { CartContext } from './CartContext.js';
// ----------------------------------------------------------
const WishlistButton = () => {
  const [isWishlist, setIsWishlist] = useState(false);

  const handlePress = () => {
    setIsWishlist(!isWishlist);
  };

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
      <Text style={styles.buttonText}>{isWishlist ? 'Added to Wishlist' : 'Add to Wishlist'}</Text>
    </TouchableOpacity>
  );
};
// ----------------------------------------------------------

export function ProductDetails({ route, navigation }) {
  // { route, navigation }
  const { addToCart } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoritePress = () => {
    setIsFavorite(!isFavorite);
  };

  console.log('route.params:', route.params);
  const { productId } = route.params;
  console.log('productId:', productId);

  const [product, setProduct] = useState(null);
  // const { addItemToCart } = useContext(CartContext);
  // -----------------------------------------------------------
  // const handleAddtocart = () => {
  //   const { name, price } = product;
  //   const item = { name, price };
  //   addToCart(item);
  // };

  // -----------------------------------------------------------

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
        <TouchableOpacity onPress={handleFavoritePress}>
        <Image
          source={
            isFavorite
              ? { uri: 'https://cdn-icons-png.flaticon.com/128/2107/2107845.png' }
              : { uri: 'https://cdn-icons-png.flaticon.com/128/1077/1077035.png' }
          }
          style={styles.heartIcon}
        />
      </TouchableOpacity>
      <WishlistButton/>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>₹{product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>

          {/* <Button onPress={handleAddtocart} title="Add to cart" /> */}
          
        </View>
        
      </ScrollView>
      <Button onPress={() => {navigation.navigate('PaymentWindow')}} title="Place order" />
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
  heartIcon: {
    width: 30,
    height: 30,
    tintColor: 'red',
    flexDirection : "row-reverse"
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
  buttonContainer: {
    backgroundColor: '#6495ed',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
