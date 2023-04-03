import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAdTVr712QHQ2xK9QyLMk5_suPoGjtehi8",
  authDomain: "tiktok-clone-1d03f.firebaseapp.com",
  projectId: "tiktok-clone-1d03f",
  storageBucket: "tiktok-clone-1d03f.appspot.com",
  messagingSenderId: "349441537548",
  appId: "1:349441537548:web:4eac2d65a42ecb90da6029",
  measurementId: "G-JEKN75X5NT"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;