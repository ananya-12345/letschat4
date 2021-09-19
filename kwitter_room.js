
  var firebaseConfig = {
      apiKey: "AIzaSyCnef6ih1_Aqz30wBvQbDnHl4zX_h4Nqeo",
      authDomain: "kwitter-8d264.firebaseapp.com",
      databaseURL:"https://kwitter-8d264-default-rtdb.firebaseio.com/",
      projectId: "kwitter-8d264",
      storageBucket: "kwitter-8d264.appspot.com",
      messagingSenderId: "61395416669",
      appId: "1:61395416669:web:a6570a180f4dc2ac3a3fb4",
      measurementId: "G-Y3DEXYVN6D"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  y= localStorage.getItem("username")
  document.getElementById("welcome").innerHTML="welcome :"+y+"!";
  function create(){
    p=document.getElementById("roomname").value;
    console.log("roomname",p);
    firebase.database().ref("/").child(p).set({
      purpose:"adding room name"
    });
    localStorage.setItem("room_name",p);
    window.location="kwitter_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       o = childKey;
      console.log("roomname of the child key",o);
      row = "<div class='room_name' id="+o+" onclick='redirectToRoomName(this.id)' >Room Name : "+ o +"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirectToRoomName(e){
  console.log("redirect function parameter",e);
localStorage.setItem("room_name", e);
}
function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("room_name")
  window.location="index.html";
}
