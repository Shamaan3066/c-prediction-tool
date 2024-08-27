// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
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

// // // Initialize Firebase
const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);

const db = getFirestore(app);

const SignUP = document.getElementById("signup")

SignUP.addEventListener("click", function () {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const auth = getAuth(app)

    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
    .then(function () {
        // User successfully created
        alert('Signup successful!');
        window.location.href = "login.html"
      })
  
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });

})