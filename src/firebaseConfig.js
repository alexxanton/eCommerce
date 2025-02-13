import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBVLVXOVyg2nvwTALC86NOcsyF-aEluME8",
  authDomain: "jojoscommerce.firebaseapp.com",
  projectId: "jojoscommerce",
  storageBucket: "jojoscommerce.firebasestorage.app",
  messagingSenderId: "225609258710",
  appId: "1:225609258710:web:73b3f9cff546e104275b77"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
