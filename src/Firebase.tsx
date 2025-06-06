import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHOX2FBaqEK16ywX16FVGMt5L1kCP-lPE",
  authDomain: "spicefood-c375f.firebaseapp.com",
  projectId: "spicefood-c375f",
  storageBucket: "spicefood-c375f.firebasestorage.app",
  messagingSenderId: "238105226561",
  appId: "1:238105226561:web:b5a5f2c02e3ffc070f45c0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }