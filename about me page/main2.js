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
 var messagesRef = firebase.database().ref('contacts');

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
    document.location.href="../homepage.html";
  },3050);

  
}

// Function to get get f orm values
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
