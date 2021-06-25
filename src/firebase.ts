// import * as firebase from 'firebase/app';

import firebase from "firebase/app";
// import "firebase/firestore";

import 'firebase/auth'
import 'firebase/storage';

const firebaseConfig = {
    
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;