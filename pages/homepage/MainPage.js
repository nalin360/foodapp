import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductsList from './ProductsList.js';
import { ProductDetails } from './ProductDetails.js';

import Cart from './cart.js';
import CartProvider from './CartContext.js';
import Carticons from './Carticons.js';

import PaymentWindow from '../paymentsbox/payment';
import Payment from '../paymentsbox/card.js';
import SidePanal from '../sidepanal/SidePanal.js';
import OrderHistoryScreen from '../orderhistorys/OrderHistoryScreen.js';

// OrderHistoryScreen
const Stack = createNativeStackNavigator();

function MainPage() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };
  return (
    <NavigationContainer independent={true}>
      <CartProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Products"
            component={ProductsList}
            options={({ navigation }) => ({
              title: 'Products',
              headerTitleStyle: styles.headerTitle,
              headerLeft : () => <SidePanal navigation={navigation}/>,
              headerRight: () => <Carticons navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={({ navigation }) => ({
              title: 'Product details',
              headerTitleStyle: styles.headerTitle,
              headerLeft : () => <SidePanal navigation={navigation}/>,
              headerRight: () => <Carticons navigation={navigation} />,
              // Pass the addToCart function as a parameter

              addToCart: (item) => {
                navigation.navigate('Cart', { item });
              },
            })}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={({ navigation }) => ({
              title: 'My cart',
              headerTitleStyle: styles.headerTitle,
              headerLeft : () => <SidePanal navigation={navigation}/>,
              headerRight: () => <Carticons navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="PaymentWindow"
            component={PaymentWindow}
          // options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Payment"
            component={Payment}
          options={{ headerShown: false }}
          />
          {/*  */}
          <Stack.Screen
            name="MainPage"
            component={MainPage}
          options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OrderHistoryScreen"
            component={OrderHistoryScreen}
          options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </CartProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
  },
});

export default MainPage;
