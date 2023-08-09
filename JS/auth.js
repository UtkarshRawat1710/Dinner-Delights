 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,GoogleAuthProvider , signInWithPopup,sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
apiKey: "AIzaSyCvT2tSzq5EnJdeDka30q06REVjx3yo4EU",
authDomain: "what-s-for-dinner-1c1a8-c424d.firebaseapp.com",
databaseURL: "https://what-s-for-dinner-1c1a8-c424d-default-rtdb.firebaseio.com",
projectId: "what-s-for-dinner-1c1a8-c424d",
storageBucket: "what-s-for-dinner-1c1a8-c424d.appspot.com",
messagingSenderId: "353620269194",
appId: "1:353620269194:web:f4c6f9c4323776c052f573",
measurementId: "G-CLY8JTW3PK"
};

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const auth = getAuth();
 console.log(app);

 

 //----- New Registration code start	  
 document.getElementById("register").addEventListener("click", function() {
	 var email =  document.getElementById("email").value;
	 var password = document.getElementById("password").value;
	 //For new registration
	 createUserWithEmailAndPassword(auth, email, password)
	 .then((userCredential) => {
	   // Signed in 
	   const user = userCredential.user;
	   console.log(user);
	   alert("Registration successfully!!");
	   // ...
	   window.location.href = "./main.html";
	 })
	 .catch((error) => {
	   const errorCode = error.code;
	   const errorMessage = error.message;
	   // ..
	   console.log(errorMessage);
	   alert(error);
	 });		  		  
 });
 //----- End

 //----- Login code start	  
 document.getElementById("Login").addEventListener("click", function() {
	 var email =  document.getElementById("login_email").value;
	 var password = document.getElementById("login_password").value;

	 signInWithEmailAndPassword(auth, email, password)
	 .then((userCredential) => {
	   // Signed in 
	   const user = userCredential.user;
	   console.log(user);
	   alert(user.email+" Login successfully!!!");
	  
	   
	   
	   const userEmail = user.email;

// Save the user's email to session storage
sessionStorage.setItem('userEmail', userEmail);

// Redirect the user to the other page
window.location.href = "./main.html";
	   // ...
	 })
	 .catch((error) => {
	   const errorCode = error.code;
	   const errorMessage = error.message;
	   console.log(errorMessage);
	   alert(errorMessage);
	 });		  		  
 });
 //----- End

 //----- Google Code Start

const provider = new GoogleAuthProvider();
 console.log(provider);
 
 //----- Google login code start	  
 document.getElementById("google-login").addEventListener("click", function() {
	 signInWithPopup(auth, provider)
	 .then((result) => {
	   // This gives you a Google Access Token. You can use it to access the Google API.
	   const credential = GoogleAuthProvider.credentialFromResult(result);
	   const token = credential.accessToken;
	   // The signed-in user info.
	   const user = result.user;
	   alert("Welcome "+user.displayName);
	   console.log(user);
	   // ...
	 }).catch((error) => {
	   // Handle Errors here.
	   const errorCode = error.code;
	   const errorMessage = error.message;
	   console.log(errorMessage);
	   // The email of the user's account used.
	   const email = error.customData.email;
	   // The AuthCredential type that was used.
	   const credential = GoogleAuthProvider.credentialFromError(error);
	   // ...
	 });		  		  
 });
 let Reset=document.querySelector("#reset");
 Reset.addEventListener("click",function()
 {
	 let email=document.querySelector("#resetEmail");
	 const auth = getAuth();
 sendPasswordResetEmail(auth, email.value)
   .then(() => {
	 // Password reset email sent!
	 // ..
	 alert("mail send");
   })
   .catch((error) => {
	 const errorCode = error.code;
	 const errorMessage = error.message;
	 // ..
   });
 
 })
