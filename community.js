
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDcCUhSqo59Dw3y5TKR8PM9T_Lp_2TFTiw",
    authDomain: "comment-dde08.firebaseapp.com",
    databaseURL: "https://comment-dde08-default-rtdb.firebaseio.com",
    projectId: "comment-dde08",
    storageBucket: "comment-dde08.appspot.com",
    messagingSenderId: "501864677573",
    appId: "1:501864677573:web:0633928c33f3b6ff43b0ac",
    measurementId: "G-4VVEDXEH3H"
  }; 

    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


   var database = firebase.database();

  function sendMesssage()
  {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    dateTime=dateTime.toString();


      var email=document.getElementById("email").value;
      var name=document.getElementById("name").value;
      var comment=document.getElementById("message").value;
console.log(email+name+comment+dateTime)
      var newMessageKey = database.ref().child('comments').push().key;
      database.ref('comments/'+newMessageKey+'/email').set(email);
      database.ref('comments/'+newMessageKey+'/name').set(name);
      database.ref('comments/'+newMessageKey+'/comment').set(comment);
      database.ref('comments/'+newMessageKey+'/date').set(dateTime);
  }

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);
  
// Submit form
function submitForm(e){
  e.preventDefault();


  // Show alert
  document.querySelector('.alert').style.display = 'block';
  
  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

}


//This is the perfect way to retrieve data leaving all the dull ways of youtubers now
var leadsRef = database.ref('comments');
leadsRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      // console.log(childData.message)

var name = document.createTextNode('Name: ' + childData.name);
var email = document.createTextNode('Email: ' + childData.email);
var comment = document.createTextNode('Comment : ' + childData.comment);
var date = document.createTextNode('Date: ' + childData.date);




var ult = document.getElementById("scoreList");
var lit = document.createElement("li");
lit.setAttribute('class','uls');
lit.appendChild(name);
lit.appendChild(document.createElement('br'));
lit.appendChild(email);
lit.appendChild(document.createElement('br'));
lit.appendChild(comment);
lit.appendChild(document.createElement('br'));
lit.appendChild(date);
lit.appendChild(document.createElement('br'));
ult.appendChild(lit);



//Hey this is
    });
});
//This is the perfect way to retrieve data leaving all the dull ways of youtubers now

function reload(){
  window.location.reload();
}
