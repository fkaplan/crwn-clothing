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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth){
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShat = await userRef.get();

  if(!snapShat.exists){
    const { displayName, email} = userAuth;
    const createdAt = new Date();
    //Ekleme document üzerinden yapılır. snapShot üzerinden yapılmaz.
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    }catch(error){
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;