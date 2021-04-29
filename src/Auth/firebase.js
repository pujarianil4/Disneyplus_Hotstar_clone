import firebase from 'firebase/app'
import "firebase/auth" 
import { APP_ID, AUTH_DOMAIN, MEASUREMENT_ID, MSG_SENDER_ID, PROJECT_ID, REACT_APP_API_KEY, STORAGE_BUCKET } from '../env';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: REACT_APP_API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MSG_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
  };

firebase.initializeApp(firebaseConfig);
export const auth= firebase.auth()
export default firebase;
