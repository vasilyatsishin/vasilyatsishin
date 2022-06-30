// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCNn94r_uGRCfdrt6JVDYbbbje64TAwEro",
  authDomain: "vasylyatsishinfinal.firebaseapp.com",
  projectId: "vasylyatsishinfinal",
  storageBucket: "vasylyatsishinfinal.appspot.com",
  messagingSenderId: "526331782940",
  appId: "1:526331782940:web:87b5962629b2e38c533cd9",
  measurementId: "G-T0P26RBXS4"
};
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
const analytics = getAnalytics(app);
export default getFirestore()