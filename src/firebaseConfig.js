// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
      apiKey: "AIzaSyAs6mecL9Hh9cJRKBzrY275odNyQR7hYYo",
      authDomain: "kabinari.firebaseapp.com",
      projectId: "kabinari",
      storageBucket: "kabinari.firebasestorage.app",
      messagingSenderId: "418173211258",
      appId: "1:418173211258:web:205d407e1bf57ef08f21c3"
    };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
