import React, { useState, useEffect, useContext } from 'react';
import { View, TouchableOpacity, Image, Text, Button, FlatList, StyleSheet } from 'react-native';
import { CartContext } from './CartContext';

const CartContext = React.createContext();

const App = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleFavoritePress = () => {
    setIsFavorite(!isFavorite);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const getTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.totalPrice;
    });
    return total;
  };

  const Cart = () => {
    const renderItem = ({ item }) => (
      <View style={styles.cartLine}>
        <Text style={styles.lineLeft}>{item.product.name} x {item.qty}</Text>
        <Text style={styles.lineRight}>$ {item.totalPrice}</Text>
      </View>
    );

    const Totals = () => {
      const total = getTotalPrice();
      return (
        <View style={styles.cartLineTotal}>
          <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
          <Text style={styles.lineRight}>$ {total}</Text>
        </View>
      );
    };

    return (
      <FlatList
        style={styles.itemsList}
        contentContainerStyle={styles.itemsListContainer}
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.product.id.toString()}
        ListFooterComponent={Totals}
      />
    );
  };

  return (
    <View style={styles.container}>
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
      <CartContext.Provider value={{ items: cartItems, addToCart, getTotalPrice }}>
        <Cart />
      </CartContext.Provider>
      <WishlistButton />
    </View>
  );
};

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  heartIcon: {
    width: 30,
    height: 30,
    tintColor: 'red',
  },
  cartLine: {
    flexDirection: 'row',
  },
  cartLineTotal: {
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
  },
  lineTotal: {
    fontWeight: 'bold',
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: '#333333',
  },
  lineRight: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
    color: '#333333',
    textAlign: 'right',
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
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

export default App;