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
  user_name = localStorage.getItem("username");
	room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    login :user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
	       console.log(message_data);
	       login1 = message_data['login'];
	       message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ login1 +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

        row = name_with_tag + message_with_tag +like_button + span_with_tag;       
        document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(e)
{
  console.log("clicked on like button - " + e);
	button_id = e;
	likes = document.getElementById(button_id).value;
	updated_likes = Number(likes) + 1;
	console.log(updated_likes);

	firebase.database().ref(room_name).child(e).update({
		like : updated_likes  
	 });

}

function logout() {
localStorage.removeItem("username");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}
