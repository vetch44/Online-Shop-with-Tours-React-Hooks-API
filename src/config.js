import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyApdwviRp6aI3B7M4slF-kjNpIpDXsrwdk",
    authDomain: "holidays-4b4bc.firebaseapp.com",
    databaseURL: "https://holidays-4b4bc.firebaseio.com",
    projectId: "holidays-4b4bc",
    storageBucket: "holidays-4b4bc.appspot.com",
    messagingSenderId: "618557136726",
    appId: "1:618557136726:web:befdac9ad7e49cde7400f7",
    measurementId: "G-01T73NQSV2"
  };
  // Initialize Firebase
 
  firebase.initializeApp(firebaseConfig);

  export default firebase;