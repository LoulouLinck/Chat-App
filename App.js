import { useEffect } from "react";
import { StyleSheet, Text, View, LogBox, Alert } from 'react-native';
// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import NetInfo to know  users' current status of network connection
import { useNetInfo }from '@react-native-community/netinfo';
// import the screens
import StartScreen from './components/Start';
import ChatScreen from './components/Chat';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

  // Create the navigator
  const Stack = createNativeStackNavigator();

const App = () => {

  // Defines a new state representing network connectivity status
  const connectionStatus = useNetInfo();

// displays Alert popup if connection is lost
  useEffect(() => {
    if (connectionStatus.isConnected === false) Alert.alert("Connection lost!")
  }, [connectionStatus.isConnected]);

  const firebaseConfig = {
    apiKey: "AIzaSyDV8BKfIERy-ticWdQnoGGbH6yZmJ-ubFE",
    authDomain: "chatty-3791d.firebaseapp.com",
    projectId: "chatty-3791d",
    storageBucket: "chatty-3791d.appspot.com",
    messagingSenderId: "534744690193",
    appId: "1:534744690193:web:15b60f6a6f847196c40bb0"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="ChatScreen">
         {props => <ChatScreen db={db} {...props} />}
       </Stack.Screen>
      </Stack.Navigator>
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

export default App;