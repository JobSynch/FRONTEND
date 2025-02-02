const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const googleBtn = document.getElementById('googleBtn');
const githubBtn = document.getElementById('githubBtn');
const signUpBtn = document.getElementById('signUpBtn');

const googleBtnSign = document.getElementById('googleBtnSign');
const githubBtnSign = document.getElementById('githubBtnSign');
const signUpBtnSign = document.getElementById('signUpBtnSign');



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
// const linkedinProvider = new firebase.auth.OAuthProvider('linkedin.com');

const firebaseConfig = {
    apiKey: "AIzaSyBVv-rRyYz2GKvVVjlgzmF5Vf1rcEOoPGM",
    authDomain: "jobsync-6f2b3.firebaseapp.com",
    projectId: "jobsync-6f2b3",
    storageBucket: "jobsync-6f2b3.firebasestorage.app",
    messagingSenderId: "769047874009",
    appId: "1:769047874009:web:1f248998fb56eb4094b1c8"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();



registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


function setUser(user) {
    fetch('http://localhost:5000/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            uid: user.uid,
            username: user.displayName,
            email: user.email,
        }),
    })
}


signUpBtn.addEventListener('click', () => {

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email == "" || password == "") {
        alert("Please fill in all fields");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("User Sign-In Success:", userCredential.user);
            alert("User Sign-In Successful!");
            setUser(userCredential.user);
        })
        .catch((error) => {
            console.error("User Sign-In Error:", error.message);
            alert("User Sign-In Failed: " + error.message);
        });
});

googleBtn.addEventListener('click', () => {
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            console.log("Google Sign-In Success:", result.user);
            alert("Google Sign-In Successful!");
            setUser(result.user);
        })
        .catch((error) => {
            console.error("Google Sign-In Error:", error.message);
            alert("Google Sign-In Failed: " + error.message);
        });
});


githubBtn.addEventListener("click", () => {
    signInWithPopup(auth, githubProvider)
        .then((result) => {
            console.log("GitHub Sign-In Success:", result.user);
            alert("GitHub Sign-In Successful!");
            setUser(result.user);
        })
        .catch((error) => {
            console.error("GitHub Sign-In Error:", error.code, error.message);
            alert("GitHub Sign-In Failed: " + error.message);
        });
});


signUpBtnSign.addEventListener('click', () => {

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email == "" || password == "") {
        alert("Please fill in all fields");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("User Sign-In Success:", userCredential.user);
            alert("User Sign-In Successful!");
            setUser(userCredential.user);
        })
        .catch((error) => {
            console.error("User Sign-In Error:", error.message);
            alert("User Sign-In Failed: " + error.message);
        });
});

googleBtnSisignUpBtnSign.addEventListener('click', () => {
    signInWithPopup(auth, googleProvider)
        .then((result) => {
            console.log("Google Sign-In Success:", result.user);
            alert("Google Sign-In Successful!");
            setUser(result.user);
        })
        .catch((error) => {
            console.error("Google Sign-In Error:", error.message);
            alert("Google Sign-In Failed: " + error.message);
        });
});


githubBtnSisignUpBtnSign.addEventListener("click", () => {
    signInWithPopup(auth, githubProvider)
        .then((result) => {
            console.log("GitHub Sign-In Success:", result.user);
            alert("GitHub Sign-In Successful!");
            setUser(result.user);
        })
        .catch((error) => {
            console.error("GitHub Sign-In Error:", error.code, error.message);
            alert("GitHub Sign-In Failed: " + error.message);
        });
});


