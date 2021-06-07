import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';

// Comment out seedDatabase- do not call twice!

const config = {
  apiKey: 'AIzaSyCTFj_lDmDuQFXEKpQ6KKot4hqMpmqxmIU',
  authDomain: 'instagram-9dee0.firebaseapp.com',
  projectId: 'instagram-9dee0',
  storageBucket: 'instagram-9dee0.apospory.com',
  messagingSenderId: '430137980523',
  appId: '1:430137980523:web:e9f3d95a19a163cd12632e'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
