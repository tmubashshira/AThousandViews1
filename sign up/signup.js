var firebaseConfig = {
    apiKey: "AIzaSyAvjCv8V-Py80-XwCFW5NXT8EebkykzXYc",
    authDomain: "login-a2357.firebaseapp.com",
    databaseURL: "https://login-a2357.firebaseio.com",
    projectId: "login-a2357",
    storageBucket: "",
    messagingSenderId: "74851527796",
    appId: "1:74851527796:web:ebca7ef7b62cf18f4a3521"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


var btn = document.getElementById("sub-btn");

var logbtn = document.getElementById("logout");




btn.addEventListener("click",abc); ///hello ekta funtion jeta ami btn k click korle call hobe

logbtn.addEventListener("click", signout);
function abc(e)
{
    e.preventDefault();
    var email=document.getElementById("inputEmail").value;
    var pass=document.getElementById("inputPassword").value;
    //console.log(email,pass);
    ///firebase.auth()
         //   .createUserWithEmailAndPassword(email, pass)
         //   .catch(function(error) {
        // Handle Errors here.
       // var errorCode = error.code;
       // var errorMessage = error.message;
      });
      console.log("users have been signed up");
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log(user.email);
      // ...
    } else {
      // User is signed out.
      console.log("no user");
      // ...
    }
  });


function signout()
{
firebase.auth()
    .signOut()
    .then(function() {
        console.log("logged out");
}).catch(function(error) {
// An error happened.
});
  }

  firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
  