// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, 
  // Text, 
  View 
} from 'react-native';
import LandingPage from './components/loginsignup';
import Main from './pages/homepage/main';

// import Payment from './components/payment';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your  !</Text>
      <StatusBar style="auto" /> */}
      {/* <Payment/> */}
      <LandingPage/>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

