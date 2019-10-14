var signin_button=document.getElementById('signin_button');

var inputPassword=document.getElementById('inputPassword');
var inputEmail=document.getElementById('inputEmail');

signin_button.addEventListener('click',e=>{
  e.preventDefault();
  var password=inputPassword.value;
  var email=inputEmail.value;

  const aut = firebase.auth().signInWithEmailAndPassword(email, password).then(cred=>{
    console.log("Logged In");
    document.location.href = "./message form/formpage.html?Login=Successful";
  }).catch(e=>{
    console.log("Error!  id: "+e.message);
  });

});