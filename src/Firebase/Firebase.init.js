// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB79159TNaw43Hr3cwLC5Vxdw1u6WEm41Q",
  authDomain: "assignment-11-3a7d3.firebaseapp.com",
  projectId: "assignment-11-3a7d3",
  storageBucket: "assignment-11-3a7d3.appspot.com",
  messagingSenderId: "415083208929",
  appId: "1:415083208929:web:64fe54efac67723b6697a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;