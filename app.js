import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut } from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js'

const firebaseConfig = {
  apiKey: "AIzaSyA6GsZw1CkS52AGe828gLgA2gkBKwdmktY",
  authDomain: "web-app-a492f.firebaseapp.com",
  projectId: "web-app-a492f",
  storageBucket: "web-app-a492f.firebasestorage.app",
  messagingSenderId: "937761513484",
  appId: "1:937761513484:web:25b0708ce0d83442c98e29"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//sign up
const getSignupbtn = document.getElementById("signupBtn")
if(getSignupbtn ){
getSignupbtn .addEventListener("click" ,function(){
   const email = document.getElementById("semail");
   const password = document.getElementById("spass");
   if (!email.value.trim() || !password.value.trim()) { 
    alert("Please enter email and password."); 
    return; 
  }
createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("User created:", user);
    alert("Account created successfully!");
     location.href = "signin.html";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
  });
})
}

let getLoginBtn = document.getElementById("signinBtn")
if(getLoginBtn){
getLoginBtn.addEventListener("click",function(){
     const lemail = document.getElementById("lemail");
     const lpassword = document.getElementById("lpass");
     if (!lemail.value.trim() || !lpassword.value.trim()) { 
      alert("Please enter email and password."); 
      return; 
    }
signInWithEmailAndPassword(auth, lemail.value, lpassword.value)
  .then((userCredential) => {
    const user = userCredential.user;
     console.log("User signed in:", user);
      alert("Login successful!");
    window.location.href = "welcome.html";

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
  });
  })
}

const goSigninBtn = document.getElementById("goSignin");
if (goSigninBtn) {
    goSigninBtn.addEventListener("click", function () {
    location.href = "signin.html";
    });

}

const goSignupBtn = document.getElementById("goSignup");
if (goSignupBtn) {
    goSignupBtn.addEventListener("click", function () {
     location.href = "signup.html";
    });
}

const userEmail = document.getElementById("userEmail");
if (userEmail) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      userEmail.innerText = "You are logged in as: " + user.email;
    } else {
      window.location.href = "signin.html";
    }
  });
}

const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    signOut(auth)
      .then(() => {
        alert("You have been signed out.");
        window.location.href = "signin.html";
      })
      .catch((error) => {
        console.log(error);
      });
  });
}
