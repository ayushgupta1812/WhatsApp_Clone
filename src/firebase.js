import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBrTULFNfXGnhXOK37xXZUBUETsH6SQN-Y",
  authDomain: "whatsapp-clone-b4f6a.firebaseapp.com",
  projectId: "whatsapp-clone-b4f6a",
  storageBucket: "whatsapp-clone-b4f6a.appspot.com",
  messagingSenderId: "1016651908055",
  appId: "1:1016651908055:web:d805f14d845320a1280192",
  measurementId: "G-95T5Y7Z5FB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();



export { auth, provider, firebaseApp };
export default db;
