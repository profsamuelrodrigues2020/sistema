
import { initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAp1NE9VUZIYT_O5mg-BbCBQv3B6y6zq_I",
  authDomain: "sistema-cbad8.firebaseapp.com",
  projectId: "sistema-cbad8",
  storageBucket: "sistema-cbad8.firebasestorage.app",
  messagingSenderId: "163981294939",
  appId: "1:163981294939:web:97ed5e8404ff717de16e7e"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export {auth, db, storage};