// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuQFuqc8FshlAgvbghNOMi8lyWKeMhuLI",
  authDomain: "my-movie-application-844ab.firebaseapp.com",
  projectId: "my-movie-application-844ab",
  storageBucket: "my-movie-application-844ab.appspot.com",
  messagingSenderId: "515276611726",
  appId: "1:515276611726:web:c7da6862fe6908332669df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;