import firebase from 'firebase/app';
import 'firebase/firestore';
import  'firebase/auth';

const config = {
    apiKey: "AIzaSyBE1JaMMAy6aydiFnrm688Lko7V85RoPv0",
    authDomain: "reactdemo-crwn-db.firebaseapp.com",
    projectId: "reactdemo-crwn-db",
    storageBucket: "reactdemo-crwn-db.appspot.com",
    messagingSenderId: "271039109692",
    appId: "1:271039109692:web:5dce4d00598c7230f0c139",
    measurementId: "G-CKR4X0L03K"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

