// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
// import { ref } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app)

const LogIn = document.getElementById("login")

LogIn.addEventListener("click", function () {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Login successful
            const user = userCredential.user;
            // User successfully authenticated
            alert('Login successful!');
            window.location.href = 'Symptoms.html'
        })
        .catch(function (error) {
            // Handle login errors
            var errorCode = error.code;
            var errorMessage = error.message;
            alert('Login failed: ' + errorMessage);
        });
});