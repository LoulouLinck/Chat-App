import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const StartScreen = ({ navigation }) => {
     const [username, setUsername] = useState('');
     const [background, setBackground] = useState('white');
     const colors = ['#090C08', '#474056', '#8A95A5', '#B9C6AE'];

 return (
  // Screen background image: must wrap whole content located inside
  <ImageBackground source={require("../assets/BackgroundImage.png")} style={styles.container}>
  
  {/* // Start page title */}
   <Text style={styles.title}>Chatty</Text>

{/* // Start page content */}
   <View style={styles.content}>  
     <TextInput
        style={styles.userInput}
        // value={username}
        onChangeText={setUsername}
        placeholder='Type your username here'
      />
      <Text style={styles.text}>Choose a background color:</Text>
      <View style={styles.colorList}>
          {colors.map((color, index) => (
            <TouchableOpacity key={index} style={[styles.box, { backgroundColor: color }, background === color && styles.selected,]} onPress={() => setBackground(color)} />
            ))}
     </View>
     {/* // Customisable button elements */}
      <TouchableOpacity style={styles.enterChatButton} onPress={() => navigation.navigate('ChatScreen', {name: username, color: background})}> 
       <Text style={styles.enterChatButtonText}>Enter Chat Room</Text>
      </TouchableOpacity>
  
     
   </View>
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