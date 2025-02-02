import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const firebaseConfig = {

    apiKey: "AIzaSyBVv-rRyYz2GKvVVjlgzmF5Vf1rcEOoPGM",
    authDomain: "jobsync-6f2b3.firebaseapp.com",
    projectId: "jobsync-6f2b3",
    storageBucket: "jobsync-6f2b3.firebasestorage.app",
    messagingSenderId: "769047874009",
    appId: "1:769047874009:web:1f248998fb56eb4094b1c8"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


export { auth, googleProvider, signInWithEmailAndPassword, signInWithPopup };