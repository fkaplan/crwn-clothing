import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB9xcKQPBE1KUQOyPpZf3NTNGE3qTgz3NI",
  authDomain: "crwn-db-75318.firebaseapp.com",
  databaseURL: "https://crwn-db-75318.firebaseio.com",
  projectId: "crwn-db-75318",
  storageBucket: "crwn-db-75318.appspot.com",
  messagingSenderId: "984398743980",
  appId: "1:984398743980:web:fcea598db637b3ae6bd209",
  measurementId: "G-LVC4C5YCBS",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;