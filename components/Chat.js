import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { GiftedChat } from "react-native-gifted-chat";

const ChatScreen = ({ route, navigation }) => {
    const username = route.params.name;
    const color = route.params.color;
    const [messages, setMessages] = useState([]);
    const onSend = (newMessages) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages))
    }

   useEffect(() => {
    setMessages([
      {
        _id: 1,
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

  useEffect(() => {
    navigation.setOptions({ title: username });
  }, []);

 return (
   <View style={[styles.container, {backgroundColor: color}]}>
     <Text>Hello {username} !</Text>
     <View>
        <GiftedChat
          messages={messages}
          onSend={messages => onSend(messages)}
          user={{
            _id: 1
          }}
        />
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