import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from './pages/loginRegister/loginsignup';
import MainPage from './pages/homepage/MainPage';
import SidePanal from './pages/sidepanal/SidePanal';
import SearchableList from './components/Search';
// import PaymentWindow from './pages/paymentsbox/payment';
// import Payment from './pages/paymentsbox/card';

// ----------------------------

// import CartMerge from './components/cart_merge';
// ----------------------------

// 
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
       
        {/* <Stack.Screen
          name="PaymentWindow"
          component={PaymentWindow}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          // options={{ headerShown: false }}
        /> */}
        
        {/* <Stack.Screen
          name="CartMerge"
          component={CartMerge}
          // options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="SidePanal"
          component={SidePanal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchableList"
          component={SearchableList}
          options={{ headerShown: false }}
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