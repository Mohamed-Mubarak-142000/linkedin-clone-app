// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCu1kxygkR_ulsmjS3s-P99HGZJnJZwXW0",
  authDomain: "linkendin-clone-app.firebaseapp.com",
  projectId: "linkendin-clone-app",
  storageBucket: "linkendin-clone-app.appspot.com",
  messagingSenderId: "744292683188",
  appId: "1:744292683188:web:beda17793dcdab546436e1",
  measurementId: "G-T9L18W16CT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
export { db, auth, provider,storage };
