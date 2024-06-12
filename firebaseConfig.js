import firebase from "firebase/app";
import "firebase/analytics";
import Constants from "expo-constants";

// Your web app's Firebase configuration
const firebaseConfig = Constants.expoConfig.extra.firebaseConfig;

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

if (firebase.analytics) {
  firebase.analytics();
}

export default firebase;
