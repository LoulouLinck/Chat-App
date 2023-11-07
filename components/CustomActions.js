    // Lets the user pick an image from the library
    const pickImage = async () => {
        let permissions = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissions?.granted) {
           let result = await ImagePicker.launchImageLibraryAsync();
    
          if (!result.canceled) setImage(result.assets[0]);
          else setImage(null)
        }
      }
  
