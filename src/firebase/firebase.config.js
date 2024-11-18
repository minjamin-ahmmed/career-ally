// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkRQloWKG1xE1Qk48NVSdu1abYbYOCVBs",
  authDomain: "career-ally.firebaseapp.com",
  projectId: "career-ally",
  storageBucket: "career-ally.firebasestorage.app",
  messagingSenderId: "1082331286416",
  appId: "1:1082331286416:web:2aca255795d774cdebc115",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
