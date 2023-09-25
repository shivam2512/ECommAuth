// firebase/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: 'AIzaSyBf_JF2M7GAjef9MD923pZ7gkzntUw4_hE',
    authDomain: 'react-http-12703.firebaseapp.com',
    projectId: 'react-http-12703',
    storageBucket: 'react-http-12703.appspot.com',
    messagingSenderId: '863417697006',
    appId: '1:863417697006:web:8e5b781c7e5bb9ab1e69ff',
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp); // Firebase Authentication
const database = getDatabase(firebaseApp); // Firebase Realtime Database

export { auth, database };
export default firebaseApp;
