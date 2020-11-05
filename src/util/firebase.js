import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

console.log(process.env.REACT_APP_API_KEY);
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DBURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSID,
    appId: process.env.REACT_APP_APPID
    // apiKey: "AIzaSyCjhRYyzPkCccqLdqxmYGX3RyKjuqQMe5g",
    // authDomain: "dndcharcreation---ga-p2.firebaseapp.com",
    // databaseURL: "https://dndcharcreation---ga-p2.firebaseio.com",
    // projectId: "dndcharcreation---ga-p2",
    // storageBucket: "dndcharcreation---ga-p2.appspot.com",
    // messagingSenderId: "676815209033",
    // appId: "1:676815209033:web:6f7e095ae9bfef79c6b598"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;