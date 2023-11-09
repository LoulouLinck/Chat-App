import { initializeApp } from "firebase/app";
import { getFirestore, disableNetwork, enableNetwork } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { useEffect } from "react";
import { StyleSheet, Text, View, LogBox, Alert } from 'react-native';
// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import NetInfo to know  users' current status of network connection
import { useNetInfo }from '@react-native-community/netinfo';
// Import ImagePicker Expo package
import * as ImagePicker from 'expo-image-picker';
// import the screens
import StartScreen from './components/Start';
import ChatScreen from './components/Chat';

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
  // Initialise the storage handler 
  const storage = getStorage(app);
  // Create the navigator
  const Stack = createNativeStackNavigator();

  LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

const App = () => {

  // Defines a new state representing network connectivity status
  const connectionStatus = useNetInfo();

// displays Alert popup if connection is lost
  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen name="Start" component={StartScreen} />
        {/* // Passes isConnected prop to Chat component */}
        <Stack.Screen name="ChatScreen">
         {(props) => (<ChatScreen isConnected={connectionStatus.isConnected} db={db} storage={storage} {...props} />)}
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