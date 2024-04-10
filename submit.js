  
  

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
//intialize firebase
  firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};