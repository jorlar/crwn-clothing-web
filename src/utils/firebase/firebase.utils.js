import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdTdcWAg7QIu7YE1s_nvKore9FX_WpDGU",
  authDomain: "crwn-8d7b3.firebaseapp.com",
  projectId: "crwn-8d7b3",
  storageBucket: "crwn-8d7b3.appspot.com",
  messagingSenderId: "56161050284",
  appId: "1:56161050284:web:b298090dda07e5c45d4909",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)