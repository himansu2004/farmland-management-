
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCY_RagjFh-61eWwKcOheyk9gswbSyVe_Y",
    authDomain: "login-form-283fb.firebaseapp.com",
    databaseURL: "https://login-form-283fb-default-rtdb.firebaseio.com",
    projectId: "login-form-283fb",
    storageBucket: "login-form-283fb.appspot.com",
    messagingSenderId: "952973734444",
    appId: "1:952973734444:web:733dc344b92b6ce0865789"
  };

firebase.initializeApp(firebaseConfig);

// Get references to the form and input fields
const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Add an event listener to the form
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Get the input values
  const email = emailInput.value;
  const password = passwordInput.value;

  // Sign in the user with Firebase Authentication
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User is signed in
      const user = userCredential.user;
      console.log('User logged in:', user);

        //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);


      // Reset the form
      form.reset();
    })
    .catch((error) => {
      console.error('Error signing in:', error);
    });
});