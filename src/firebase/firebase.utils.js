import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBE1JaMMAy6aydiFnrm688Lko7V85RoPv0",
  authDomain: "reactdemo-crwn-db.firebaseapp.com",
  projectId: "reactdemo-crwn-db",
  storageBucket: "reactdemo-crwn-db.appspot.com",
  messagingSenderId: "271039109692",
  appId: "1:271039109692:web:5dce4d00598c7230f0c139",
  measurementId: "G-CKR4X0L03K",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  //console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createDate = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createDate,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return userRef;
};



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
