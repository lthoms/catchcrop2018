  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDOHmNtmGPapr9brfSkHjV4q2Svue2yIAE",
    authDomain: "dataindsamling-ef032.firebaseapp.com",
    databaseURL: "https://dataindsamling-ef032.firebaseio.com",
    projectId: "dataindsamling-ef032",
    storageBucket: "dataindsamling-ef032.appspot.com",
    messagingSenderId: "938800202021"
  };
  firebase.initializeApp(config);
  
  var database = firebase.database();
  
  var addToList = (value) => {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(value);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
  }
  

	
	database.ref('obs').on('child_added', function(snapshot) {
	  addToList( JSON.stringify(snapshot.val()));
	});