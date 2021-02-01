import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAFxAa16iHQJsuLN1esAT8pU9Pu095zDnM',
  authDomain: 'blog-posts-a2c0f.firebaseapp.com',
  projectId: 'blog-posts-a2c0f',
  storageBucket: 'blog-posts-a2c0f.appspot.com',
  messagingSenderId: '148961775521',
  appId: '1:148961775521:web:d8a923cd9ebfe240e9c5e0',
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp, projectAuth };
