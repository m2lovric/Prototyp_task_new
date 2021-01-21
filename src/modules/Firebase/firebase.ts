import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyABKFkZZ2q_SDUY3H0phRc_snmIbBLWJ9w",
  authDomain: "prototyp-task-8d2db.firebaseapp.com",
  projectId: "prototyp-task-8d2db",
  storageBucket: "prototyp-task-8d2db.appspot.com",
  messagingSenderId: "803189294130",
  appId: "1:803189294130:web:4b8d4b11c1b4a602c8682b",
  measurementId: "G-ER0DNT5V6S"
};

app.initializeApp(firebaseConfig);

export const auth = app.auth();
export const db = app.firestore();