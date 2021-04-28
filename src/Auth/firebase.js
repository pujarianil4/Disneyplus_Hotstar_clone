import firebase from 'firebase/app'
import "firebase/auth" 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBCJjOAFE9hFt_ILwB247CJinm8NbcEjvQ",
    authDomain: "disneyplus-hotstar-clone.firebaseapp.com",
    projectId: "disneyplus-hotstar-clone",
    storageBucket: "disneyplus-hotstar-clone.appspot.com",
    messagingSenderId: "370641058048",
    appId: "1:370641058048:web:b708a6a8f43d5890e4dbe5",
    measurementId: "G-SJ9KWSEVQP"
  };

firebase.initializeApp(firebaseConfig);
export const auth= firebase.auth()
export default firebase;
