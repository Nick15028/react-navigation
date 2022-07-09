import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import HomeDetailScreen from './src/screens/HomeDetailScreen';
import ProfileDetailScreen from './src/screens/ProfileDetailScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

// for redux
import configureStrore from './src/redux/store';
import { StoreContext } from 'redux-react-hook';

const store = configureStrore()

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function MyHomeStack() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: { backgroundColor: 'tomato' },
        headerBackTitle: '喊回',
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="HomeDetailScreen" component={HomeDetailScreen} options={{ title: 'My Detail' }} />
    </Stack.Navigator>
  )
}

function MyProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName='Profile'
      screenOptions={{
        headerStyle: { backgroundColor: 'tomato' },
        headerBackTitle: '喊回2',
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ProfileDetailScreen" component={ProfileDetailScreen} options={{ title: 'My Detail2' }} />
    </Stack.Navigator>
  )
}

function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName='Home'
    //     screenOptions={{
    //       headerStyle: { backgroundColor: 'tomato' },
    //       headerBackTitle: '喊回',
    //       headerTintColor: 'white'
    //     }}
    //   >
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="HomeDetailScreen" component={HomeDetailScreen} options={{ title: 'My Detail' }} />
    //   </Stack.Navigator>
    <NavigationContainer>

      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, focused }) => {
            let iconName
            if (route.name == 'Home') {
              // iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
              iconName = 'ios-home'
            } else if (route.name == 'Settings') {
              iconName = 'ios-options'
            }
            return <Ionicons name={iconName} size={25} color={color} />
          }
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey'
        }}
      >
        <Tab.Screen name="Home" component={MyHomeStack} />
        <Tab.Screen name="Settings" component={MyProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>



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

export default MyApp = () => (
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
)