import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
//   databaseURL:'https://'
};

const app = initializeApp(firebaseConfig);

// const db = getFirestore(app)