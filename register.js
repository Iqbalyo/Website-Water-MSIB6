// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT8v-eAccRZx0crVmDjwJ3Z4NJ1239nvQ",
  authDomain: "fir-auth-17abd.firebaseapp.com",
  projectId: "fir-auth-17abd",
  storageBucket: "fir-auth-17abd.appspot.com",
  messagingSenderId: "674441718835",
  appId: "1:674441718835:web:17496354a2cf92dfbe8746",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Submit button
const submit = document.getElementById("signUp");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  // Input data
  const email = document.getElementById("registerEmail").value; // Sesuaikan dengan ID di HTML
  const password = document.getElementById("registerPassword").value; // Sesuaikan dengan ID di HTML

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Creating Account...");
      window.location.href = 'userlogin.html';
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});
