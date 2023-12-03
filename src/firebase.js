
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCwyi8JeY6XPs3s5mM2S-eHFZL6byq8RAg",
    authDomain: "netflix-clonebyngk.firebaseapp.com",
    projectId: "netflix-clonebyngk",
    storageBucket: "netflix-clonebyngk.appspot.com",
    messagingSenderId: "354629585658",
    appId: "1:354629585658:web:1853b1b2d3a5c8ae8b9743"
  }; 
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export { auth }
  export default db;
