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


function createTable() {

  var table = document.getElementById('table_body');

  var ref = "messages";
  var emailsRef = firebase.database().ref(ref);

  emailsRef.on('value', data => {
    var alldata = data.val();///val() t firebase er function builtin
    var keys = Object.keys(alldata);
	console.log("called!");
    for (var i = 0; i < keys.length; i++) {
      var index = keys[i];
      var row = table.insertRow();
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      cell1.innerHTML = alldata[index].name;
      cell2.innerHTML = alldata[index].email;
      cell3.innerHTML = alldata[index].message;
    }
  }, errEmailsData);
}

function errEmailsData(err) {
  console.log("Error!! id: ");
console.log(err);}

createTable();