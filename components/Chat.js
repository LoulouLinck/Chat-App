import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform } from 'react-native';
// Chat UI library & associated components
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import { collection, getDocs, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ChatScreen = ({ route, navigation, db, isConnected }) => {
    // Sets chat screen title and color to users' input/choice in Start screen
    // const username = route.params.name;
    // Extract color, userID
    const  {color, userID, name} = route.params;
    // Messages state initialization
    const [messages, setMessages] = useState([]);
 
 
    // Set entered username in StartScreen as ChatScreen title
    useEffect(() => {
      navigation.setOptions({ title: name });
    }, []);

  useEffect(() => {
    let unsubMessages;
    if (isConnected === true) {
    // Query Firestore for messages, ordered by their creation date
    const q = query(collection(db, "messages"), orderBy("createdAt", "desc"));
   // Listens for real-time changes in messages collection
    unsubMessages = onSnapshot(q, (docs) => {
      let newMessages = [];
      docs.forEach(doc => {
        newMessages.push({ _id: doc.id, ...doc.data(), 
          createdAt: new Date(doc.data().createdAt.toMillis())
        })
      });
      cacheMessages(newMessages)
      setMessages(newMessages);
    });
  } else loadCachedMessages();
    // Clean up code = unsubscribe Firestore listener
    return () => {
      if (unsubMessages) {
        unsubMessages();
      }
    };
  }, [isConnected]);

  // If no connection: load cached messages from the local storage 
  const loadCachedMessages = async () => {
    const cachedMessages = await AsyncStorage.getItem("messages") || [];
    setMessages(JSON.parse(cachedMessages));
  };

// setter function setMessage() accepts callback function which 1st parameter: previousMessages = variable refers to latest value of state
    //appends the new msg to newMessages array: to original list of msg from previousMessages. Gets displayed in chat.
    const onSend = (newMessages) => {
    addDoc(collection(db, "messages"), newMessages[0]);
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

     <Text>Hello {name} !</Text>
     <View style={styles.container}>
        <GiftedChat
          messages={messages}
          // UI customisation
          renderBubble={renderBubble}
          onSend={(messages) => onSend(messages)}
          user={{
            _id: userID,
            // why not: 'uid: userID' as in exercise?
            name
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