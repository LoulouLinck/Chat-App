import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform } from 'react-native';
// Chat UI library & associated components
import { GiftedChat, Bubble } from "react-native-gifted-chat";
// Initialize connection for Firestore
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const ChatScreen = ({ route, navigation, db }) => {
  // Sets chat screen title and color to users' input/choice in Start screen
    const username = route.params.name;
    const color = route.params.color;
    // Messages state initialization
    const [messages, setMessages] = useState([]);

    useEffect(() => {
      navigation.setOptions({ title: username })
    // Msg w/ Gifted Chat follow format: ID, creation date, user object. User object requires: user ID, name, avatar.
    setMessages([
      // System message
      {
        _id: 1,
        text: 'You\'ve entered the Chat Room',
        createdAt: new Date(),
        system: true,
      },
      // User message
      {
        _id: 2,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

// setter function setMessage() accepts callback function which 1st parameter: previousMessages = variable refers to latest value of state
    //appends the new msg to newMessages array: to original list of msg from previousMessages. Gets displayed in chat.
    const onSend = (newMessages) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))
    }
    // UI customisation
    const renderBubble = (props) => {
      return <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#000"
          },
          left: {
            backgroundColor: "#FFF"
          }
        }}
      />
    }

 return (
   <View style={[styles.container, {backgroundColor: color}]}>

     <Text>Hello {username} !</Text>
     <View style={styles.container}>
        <GiftedChat
          messages={messages}
          // UI customisation
          renderBubble={renderBubble}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1
          }}
          />
          {/* // Fixes Android & iOs Keyboards appearance: not covering content */}
          {Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null }
          {Platform.OS === "ios"? <KeyboardAvoidingView behavior="padding" />: null}
    </View>
   </View>
 );
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
  //  justifyContent: 'center',
  //  alignItems: 'center'
 }
});

export default ChatScreen;