import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TransferenceFirst from './app/components/transferences/TransferenceFirst';
import TransferenceSecond from './app/components/transferences/TransferenceSecond';
import TransferenceThird from './app/components/transferences/TransferenceThird';

export default function App() {

  const Tab = createMaterialBottomTabNavigator();
  const Stack = createStackNavigator()

  function HomeScreen({navigation}) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
  
        <Button 
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
  
  function DetailsScreen({navigation}) {
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Details Screen</Text>
  
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }

  const TransferenceStackScreen = () => {
    return(
      <Stack.Navigator>
        <Stack.Screen name="First" component={TransferenceFirst}/>
        <Stack.Screen name="Second" component={TransferenceSecond}/>
        <Stack.Screen name="Third" component={TransferenceThird}/>
      </Stack.Navigator>
    )
  }

  return (
    /*
    <NavigationContainer>
      <TransferenceStackScreen/>
    </NavigationContainer>
    */
    <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Transference"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen 
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color,size}) => (
            <MaterialComunityIcons name="home" color='#d73a74' size={size}/>
          ),
        }}
      />
      <Tab.Screen 
        name="Transference"
        component={TransferenceStackScreen}
        options={{
          tabBarLabel: 'Transference',
          tabBarIcon: ({color,size}) => (
            <MaterialComunityIcons name="home" color='#d73a74' size={size}/>
          ),
        }}
      />
      <Tab.Screen 
        name="Details"
        component={DetailsScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarIcon: ({color,size}) => (
            <MaterialComunityIcons name="bell" color='#d73a74' size={size}/>
          ),
        }}
      />
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
