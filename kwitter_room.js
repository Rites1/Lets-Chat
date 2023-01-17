// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFVQEEomN0wgHXCNF0upl4pVGAFm_5h8s",
  authDomain: "letschat-cf253.firebaseapp.com",
  databaseURL: "https://letschat-cf253-default-rtdb.firebaseio.com",
  projectId: "letschat-cf253",
  storageBucket: "letschat-cf253.appspot.com",
  messagingSenderId: "287385752664",
  appId: "1:287385752664:web:b0a9ce7e8ea09f17ba662d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome" + user_name;

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
//End code
});});}
getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("roomname", name);
    window.location = "kwitter_page.html";
}
function add_room(){
    roomname = document.getElementById("roomname").value;
    localStorage.setItem("roomname", roomname);
    firebase.database().ref("/").child(roomname).update({
        purpose: "adding room name"
    });
    window.location = "kwitter_page.html";
}
function logout(){
    window.location = "index.html";
}