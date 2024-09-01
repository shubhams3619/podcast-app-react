// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPh9Bpw_wGM0OzxCnjjJBgmJWpm61vbVY",
  authDomain: "podcast-app-4e797.firebaseapp.com",
  projectId: "podcast-app-4e797",
  storageBucket: "podcast-app-4e797.appspot.com",
  messagingSenderId: "808399590463",
  appId: "1:808399590463:web:37191b4463dab51cbcd48a",
  measurementId: "G-8XJ4X702D3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { auth, db, storage };
