import { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { getAuth, signInAnonymously } from "firebase/auth";

const StartScreen = ({ navigation }) => {
     const [name, setName] = useState('');
     const [background, setBackground] = useState('white');
     // Colors list for user customisation
     const colors = ['#090C08', '#474056', '#8A95A5', '#B9C6AE'];
     // initialize Firebase authentication handler
     const auth = getAuth();

     const signInUser = () => {
      signInAnonymously(auth)
        .then((result) => { // or ChatScreen?
          navigation.navigate("ChatScreen", {userID: result.user.uid, name: name, color: background,});
          Alert.alert("Signed in Successfully!");
        })
        .catch((error) => {
          Alert.alert("Unable to sign in, try later again.", error);
        });
    };

 return (
  // Screen background image: must wrap whole content located inside
  <ImageBackground source={require("../assets/BackgroundImage.png")} style={styles.container}>
  
  {/* // Start page title */}
   <Text style={styles.title}>Chatty</Text>
{/* // Start page content */}
   {/* <View style={styles.content}>   */}
   {/* //Fixes iOs Keyboards appearance: not covering content */}
   <KeyboardAvoidingView style={styles.content} behavior={Platform.OS === "ios"? "padding": null} >
     <TextInput
        style={styles.userInput}
        value={name}
        onChangeText={setName}
        placeholder='Type your username here'
      />
      <Text style={styles.text}>Choose a background color:</Text>
      <View style={styles.colorList}>
          {colors.map((color, index) => (
            <TouchableOpacity key={index} style={[styles.box, { backgroundColor: color }, background === color && styles.selected,]} onPress={() => setBackground(color)} /> 
            ))}
     </View>
     {/* // Customisable button elements */}
      <TouchableOpacity style={styles.enterChatButton} onPress={signInUser}> 
       <Text style={styles.enterChatButtonText}>Enter Chat Room</Text>
      </TouchableOpacity>
   {/* </View> */}
   </KeyboardAvoidingView>
  </ImageBackground>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 50,
 },
 content: {
  width: '88%',
  height: '44%',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  borderRadius: 20,
},
 userInput: {
   width: "88%",
   padding: 15,
   borderWidth: 1,
   margin: 10,
   borderColor: 'black',
   fontSize: 16,
   fontWeight: '600',
   color: '#757083',
   marginTop: 20,
 },
 colorList: {
  flexDirection: 'row',
},
box: {
  width: 30,
  height: 30,
  margin: 10,
  marginBottom: 1,
  borderRadius: 15,
},
enterChatButton: {
  width: '88%',
  margin: 20,
  padding: 20,
  alignItems: 'center',
  backgroundColor: '#757083',
},
enterChatButtonText: {
  fontSize: 16,
  fontWeight: '600',
  color: '#FFFFFF',
},
text: {
  fontSize: 16,
  fontWeight: '300',
  color: '#757083',
  marginBottom: 10,
},
title: {
  fontSize: 45,
  fontWeight: '600',
  color: '#FFFFFF',
  marginTop: 70,
},
selected: {
  borderWidth: 1,
  borderColor: 'red',
},
});

export default StartScreen; 