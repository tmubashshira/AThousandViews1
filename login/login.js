var firebaseConfig = {
    apiKey: "AIzaSyC4fmWi_73WPK3tXIEVMmFkzj0UGuBAsnM",
    authDomain: "a-thousand-views.firebaseapp.com",
    databaseURL: "https://a-thousand-views.firebaseio.com",
    projectId: "a-thousand-views",
    storageBucket: "",
    messagingSenderId: "578516748922",
    appId: "1:578516748922:web:f56e5038bd9f43b60509c3",
    measurementId: "G-K7JZX74R5F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
	
var signin_button=document.getElementById('signin_button');

var inputPassword=document.getElementById('inputPassword');
var inputEmail=document.getElementById('inputEmail');

signin_button.addEventListener('click',e=>{
  e.preventDefault();
  var password=inputPassword.value;
  var email=inputEmail.value;

  const aut = firebase.auth().signInWithEmailAndPassword(email, password).then(cred=>{
    console.log("Logged In");
    document.location.href = "../homepage.html?Login=Successful";
  }).catch(e=>{
    console.log("Error!  id: "+e.message);
  });

});