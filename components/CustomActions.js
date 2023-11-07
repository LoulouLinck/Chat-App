import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import { TouchableOpacity } from "react-native";

const CustomActions = () => {
import { TouchableOpacity, StyleSheet, Text, View, Alert } from "react-native";

const CustomActions = ( wrapperStyle, iconTextStyle ) => {
    const onActionPress = () => {}

  return (
    <TouchableOpacity style={styles.container} onPress={onActionPress}>
        <View style={[styles.wrapper, wrapperStyle]}>
            <Text style={[styles.iconText, iconTextStyle]}>+</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
      width: 26,
      height: 26,
      marginLeft: 10,
      marginBottom: 10,
    },
    wrapper: {
      borderRadius: 13,
      borderColor: '#b2b2b2',
      borderWidth: 2,
      flex: 1,
    },
    iconText: {
      color: '#b2b2b2',
      fontWeight: 'bold',
      fontSize: 10,
      backgroundColor: 'transparent',
      textAlign: 'center',
    },
  });

export default CustomActions;

    const [location, setLocation] = useState(null);

    // Lets the user pick an image from the library
    const pickImage = async () => {
        let permissions = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissions?.granted) {
           let result = await ImagePicker.launchImageLibraryAsync();
    
          if (!result.canceled) setImage(result.assets[0]);
          else setImage(null)
        }
    }
    // lets user pick an image from library
    const takePhoto = async () => {
        let permissions = await ImagePicker.requestCameraPermissionsAsync();
    
        if (permissions?.granted) {
          let result = await ImagePicker.launchCameraAsync();
    
         if (!result.canceled) setImage(result.assets[0]);
        else setImage(null)
        }
    }

    // creates geLocation method
    const getLocation = async () => {
        let permissions = await Location.requestForegroundPermissionsAsync();
    
        if (permissions?.granted) {
        const location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        } else {
        Alert.alert("Permissions to read location aren't granted");
        }
    }
    
  
  
