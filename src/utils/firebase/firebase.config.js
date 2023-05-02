// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHEfoRrDffE7K12Zpy44XRKX1OzEr0LEQ",
  authDomain: "cooks-cantina-client.firebaseapp.com",
  projectId: "cooks-cantina-client",
  storageBucket: "cooks-cantina-client.appspot.com",
  messagingSenderId: "1007007739501",
  appId: "1:1007007739501:web:f2f01db941d70880bcd964"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;