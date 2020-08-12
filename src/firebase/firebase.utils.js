import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCmcu8n8T1ZexzX6ggjnVG9bJqDWAQFFzU",
  authDomain: "blog-db-4d1bf.firebaseapp.com",
  databaseURL: "https://blog-db-4d1bf.firebaseio.com",
  projectId: "blog-db-4d1bf",
  storageBucket: "blog-db-4d1bf.appspot.com",
  messagingSenderId: "182732772930",
  appId: "1:182732772930:web:3e55211621bd127c1effdb",
  measurementId: "G-HRTEFMJFDL",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
