import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCrlXkhH5J_AnjHVPyVzv8xXSRIfd4Sj6o",
  authDomain: "whats-app-clone-2ace5.firebaseapp.com",
  projectId: "whats-app-clone-2ace5",
  storageBucket: "whats-app-clone-2ace5.appspot.com",
  messagingSenderId: "804047003144",
  appId: "1:804047003144:web:4001e38827ad33f3603bbd",
  measurementId: "G-SL8ZGE9B17"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();



export { auth, provider, firebaseApp };
export default db;
