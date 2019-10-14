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

  function createtable()
  {
      var table=document.getElementById("table_body");

      var ref=firebase.database().ref("contactme");

      ref.on("value",data=>{
          var alldata=data.val();
          var keys=Object.keys(alldata);

          for(var i=0;i<keys.length;i++)
          {
              var index=keys[i];

              var row=table.insertRow();
              var cell1=row.insertCell(0);
              var cell2=row.insertCell(1);
			  var cell3=row.insertCell(2);
             


              cell1.innerHTML=alldata[index].name;
			  
			  cell2.innerHTML=alldata[index].email;
              
              cell3.innerHTML=alldata[index].message;
          }


      },errorfunc);
  }

  function errorfunc(err)
  {
    console.log("Error!! id: ");
    console.log(err);
  }

  createtable();
