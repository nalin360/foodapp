import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductsList  from './ProductsList.js';
import { ProductDetails } from './ProductDetails.js';

import Cart  from './cart.js';
// import { CartIcon } from '../Services/Carticons.js';
import CartProvider from './CartContext.js';
import Carticons from './Carticons.js';

// import LandingPage from './components/loginsignup.js';


const Stack = createNativeStackNavigator();

function MainPage() {

  return (

    

      <NavigationContainer independent={true}>
        <CartProvider>
        <Stack.Navigator>
          <Stack.Screen name='Products' component={ProductsList}
            options={({ navigation }) => ({
              title: 'Products',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <Carticons navigation={navigation} />
            })} />

          <Stack.Screen name='ProductDetails' component={ProductDetails}

            options={({ navigation }) => ({
              title: 'Product details',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <Carticons navigation={navigation} />,
            })} />

          <Stack.Screen name='Cart' component={Cart}

            options={({ navigation }) => ({
              title: 'My cart',
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <Carticons navigation={navigation} />,

            })} />

        </Stack.Navigator></CartProvider>
      </NavigationContainer>
    

  );

}

const styles = StyleSheet.create({

  headerTitle: {

    fontSize: 20

  }

});

export default MainPage;