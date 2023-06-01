import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from './pages/loginRegister/loginsignup';
import MainPage from './pages/homepage/MainPage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          // options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// import React from 'react';
// import { StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import ProductsList  from './pages/homepage/ProductsList';
// import { ProductDetails } from './pages/homepage/ProductDetails.js';

// import Cart  from './pages/homepage/cart.js';
// // import { CartIcon } from '../Services/Carticons.js';
// import CartProvider from './pages/homepage/CartContext.js';
// import Carticons from './pages/homepage/Carticons.js';

// // import LandingPage from './components/loginsignup.js';


// const Stack = createNativeStackNavigator();

// function App() {

//   return (

//     <CartProvider>

//       <NavigationContainer>
        
//         <Stack.Navigator>
//           <Stack.Screen name='Products' component={ProductsList}
//             options={({ navigation }) => ({
//               title: 'Products',
//               headerTitleStyle: styles.headerTitle,
//               headerRight: () => <Carticons navigation={navigation} />
//             })} />

//           <Stack.Screen name='ProductDetails' component={ProductDetails}

//             options={({ navigation }) => ({
//               title: 'Product details',
//               headerTitleStyle: styles.headerTitle,
//               headerRight: () => <Carticons navigation={navigation} />,
//             })} />

//           <Stack.Screen name='Cart' component={Cart}

//             options={({ navigation }) => ({
//               title: 'My cart',
//               headerTitleStyle: styles.headerTitle,
//               headerRight: () => <Carticons navigation={navigation} />,

//             })} />

//         </Stack.Navigator>
//       </NavigationContainer>
//     </CartProvider>

//   );

// }

// const styles = StyleSheet.create({

//   headerTitle: {

//     fontSize: 20

//   }

// });

// export default App;S