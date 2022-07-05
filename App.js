import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import HomeDetailScreen from './src/screens/HomeDetailScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
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


      {/* <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, focused }) => {
            let iconName
            if (route.name == 'Home') {
              // iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
              return <Image
                src={{ require: './images/mouse.svg' }}
                style={{ width: 30, height: 30 }} alt="Background"
              />
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
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={ProfileScreen} />
      </Tab.Navigator> */}
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
