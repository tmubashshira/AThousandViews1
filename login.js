  // Your web app's Firebase configuration
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
  const auth=firebase.auth();
  
  var signin_button=document.getElementById('sub-btn');

var inputPassword=document.getElementById('inputPassword');
var inputEmail=document.getElementById('inputEmail');

signin_button.addEventListener('click',e=>{
  e.preventDefault();
  var password=inputPassword.value;
  var email=inputEmail.value;

  const aut = firebase.auth().signInWithEmailAndPassword(email, password).then(cred=>{
    console.log("Logged In");
	console.log(email,password);
    document.location.href = "./index.html?Login=Successful";
  }).catch(e=>{
    console.log("Error!  id: "+e.message);
  });

});
