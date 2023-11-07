import * as Location from 'expo-location';
import MapView from 'react-native-maps';
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
    
  
  
