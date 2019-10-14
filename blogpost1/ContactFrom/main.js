 var firebaseConfig = {
    apiKey: "AIzaSyAvjCv8V-Py80-XwCFW5NXT8EebkykzXYc",
    authDomain: "login-a2357.firebaseapp.com",
    databaseURL: "https://login-a2357.firebaseio.com",
    projectId: "login-a2357",
    storageBucket: "login-a2357.appspot.com",
    messagingSenderId: "74851527796",
    appId: "1:74851527796:web:ebca7ef7b62cf18f4a3521"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 var messagesRef = firebase.database().ref('cat');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form function here
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = document.getElementById('name').value; //getInputVal('name');
  
  var email = getInputVal('email');
  
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();

  //redirect to home page

  setTimeout(function(){
    document.location.href="./index.html";
  },3050);

  
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    message:message
  });
}
