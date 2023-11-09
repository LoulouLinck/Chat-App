# 📖 # Cityvent

> Chatty is a user-friendly mobile chat app built React Native offering a smooth messaging experience together with the possiblility to chare images and location.

## Objective
Create a serverless, progressive web application (PWA) in React following the test-driven development (TDD) approach, integrating with Google Calendar API to fetch and showcase upcoming events.
<!-- **Link to myFlix App:** https://... -->

## 🛠 Built With

- React Native
- Expo (toolchain for building native apps in JavaScript)
- React Native Gifted Chat library
- Google Firestore DB
- Google Firebase Authentication
- AsyncStorage caching for offline use
- Firebase Cloud Storage (for storing images)
- Expo ImagePicker & MediaLibrary for communication features

### Key Features 
 
- **A page where users can enter their name and choose a background color for the chat screen before joining the chat**
- **A page displaying the conversation, as well as an input field and submit button**
- **The chat must provide users with two additional communication features: sending images and location data**
- **Data gets stored online and offline**

<br>

### Technichal Requirements

- The app must be written in React Native.
- The app must be developed using Expo.
- The app must be styled according to the given screen design.
- Chat conversations must be stored in Google Firestore Database.
- The app must authenticate users anonymously via Google Firebase authentication.
- Chat conversations must be stored locally.
- The app must let users pick and send images from the phone’s image library.
- The app must let users take pictures with the device’s camera app, and send them.
- The app must store images in Firebase Cloud Storage.
- The app must be able to read the user’s location data.
Page 2
- Location data must be sent via the chat in a map view.
- The chat interface and functionality must be created using the Gifted Chat library.
- The app’s codebase must contain comments.

## Getting Started
### Setting up your Environment
Clone [repository](https://github.com/LoulouLinck/Chat-App) 

```npm install - expo-cli Install Expo```

Install All Required Packages

```Navigate to the root folder of the project and run 
npx expo start or npm start Start Expo
```


### Setting up Google Firebase database
Firebase link -> (https://firebase.google.com/)

Sign-up or sign in to [Firebase](https://firebase.google.com/) and add a new project
Navigate to 'Build' > 'Firestore Database': create a new database in production mode
Navigate to 'Project Settings' > 'General' > 'Your apps' and select the web app option symbol (</>) and follow the instruction to create a Firebase web app.
Install firebase to add firebase connection into your project directory: `npm install firebase`
Copy the Firebase Config from the project setting tab and paste into you App.js file
Navigate to the rules tab in the console. To allow read and write access to the database, change the code: `allow read, write: if false;` to: `allow read, write: if true;`. Click publish


## Packages Needed
Packages to install:

    `npm install --save @react-navigation/native @react-navigation/native-stack`
    `expo install react-native-screens react-native-safe-area-context`
    `npm install react-native-gifted-chat --save`
    `npm install firebase@9.13.0 --save`
    `expo install @react-native-async-storage/async-storage`
    `expo install @react-native-community/netinfo`
    `expo install expo-image-picker`
    `expo install expo-location`
    `expo install react-native-maps`

## Credits

<p align="right"><a href="#readme-top">back to top</a></p>

**Laure Lincker**

- GitHub: [@LoulouLinck](https://github.com/LoulouLinck)

This was a solo project guided by tutors and mentors from <a href="https://careerfoundry.com/en/courses/become-a-web-developer/">CareerFoundry.</a>
