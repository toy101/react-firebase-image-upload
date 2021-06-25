// import * as firebase from 'firebase/app';

import firebase from "firebase/app";
// import "firebase/firestore";

import 'firebase/auth'
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBRnW_FvyD1MG_yBb1uNu2TK1HluPrWNNQ",
    authDomain: "test-hacku-75c03.firebaseapp.com",
    projectId: "test-hacku-75c03",
    storageBucket: "test-hacku-75c03.appspot.com",
    messagingSenderId: "518230654166",
    appId: "1:518230654166:web:27b8277bd359548e7d5d77"
  };

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;