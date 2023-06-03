import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function SidePanal({ navigation }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  useEffect(() => {
    console.log('Selected Menu Item:', selectedMenuItem);
    // Perform any logic or actions you need with the selected menu item

  }, [selectedMenuItem]);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuItemPress = (menuItem) => {
    setSelectedMenuItem(menuItem);
    toggleDrawer();
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleDrawer}>
          <Ionicons name={drawerOpen ? 'close' : 'menu'} size={32} color="white" />
        </TouchableOpacity>
        {/* <Text style={styles.title}>Slide Drawer Navigation</Text> */}
      </View>
      <View style={styles.content}>
        {/* Your content goes here */}
      </View>
      <View style={[styles.drawer, { left: drawerOpen ? 0 : -width * 0.8 }]}>
        <View style={styles.drawerContent}>
          <TouchableOpacity onPress={() => handleMenuItemPress('My Account')}>
            <View style={[styles.drawerItem, selectedMenuItem === 'My Account' && styles.drawerItemSelected]}>
              <Ionicons name="person" size={24} color="blue" style={styles.drawerIcon} />
              <Text style={styles.drawerItemText}>My Account</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMenuItemPress('Addresses')}>
            <View style={[styles.drawerItem, selectedMenuItem === 'Addresses' && styles.drawerItemSelected]}>
              <Ionicons name="location" size={24} color="blue" style={styles.drawerIcon} />
              <Text style={styles.drawerItemText}>Addresses</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMenuItemPress('Payments & Refund')}>
            <View style={[styles.drawerItem, selectedMenuItem === 'Payments & Refund' && styles.drawerItemSelected]}>
              <Ionicons name="cash" size={24} color="blue" style={styles.drawerIcon} />
              <Text style={styles.drawerItemText}>Payments & Refund</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMenuItemPress('Wishlist')}>
            <View style={[styles.drawerItem, selectedMenuItem === 'Wishlist' && styles.drawerItemSelected]}>
              <Ionicons name="heart" size={24} color="blue" style={styles.drawerIcon} />
              <Text style={styles.drawerItemText}>Wishlist</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
          // onPress={() => handleMenuItemPress('Order History')}
          onPress={() => navigation.navigate('OrderHistoryScreen')}

          >
            <View style={[styles.drawerItem, selectedMenuItem === 'Order History' && styles.drawerItemSelected]}>
              <Ionicons name="clipboard" size={24} color="blue" style={styles.drawerIcon} />
              <Text style={styles.drawerItemText}>Order History</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMenuItemPress('Help')}>
            <View style={[styles.drawerItem, selectedMenuItem === 'Help' && styles.drawerItemSelected]}>
              <Ionicons name="help-circle" size={24} color="blue" style={styles.drawerIcon} />
              <Text style={styles.drawerItemText}>Help</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleMenuItemPress('Sign Out')}>
            <View style={[styles.drawerItem, selectedMenuItem === 'Sign Out' && styles.drawerItemSelected]}>
              <Ionicons name="log-out" size={24} color="blue" style={styles.drawerIcon} />
              <Text style={styles.drawerItemText}>Sign Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    zIndex: 1,
    flex: 1,
   
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4287f5',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(245 240 240 / 77%)'
  },
  drawer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: width * 0.8,
    backgroundColor: 'rgb(245 240 240 / 77%)',
    color:'rgb(245 240 240 / 77%)'
  },
  drawerContent: {
    flex: 1,
    padding: 24,
    marginTop: 80,
    color : "white" 
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  drawerItemSelected: {
    backgroundColor: '#f1f1f1',
  },
  drawerIcon: {
    marginRight: 12,
  },
  drawerItemText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
});
