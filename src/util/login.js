import firebase from "./firebase";
const auth = firebase.auth();

export async function newSignUp(email, password) {
    try {
        let response = await auth.createUserWithEmailAndPassword(email, password);
        console.log(response);
    } catch (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + errorMessage);
    }
      
}

export async function SignIn(email, password) {
    try {
        let response = await auth.signInWithEmailAndPassword(email, password);
        console.log(response);
    } catch (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + errorMessage);
    }
      
}

export async function SignOut() {
    try {
        let response = await auth.signOut();
        console.log(response);
    } catch (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + errorMessage);
    }
      
}


// export const checkUser = auth.onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//       console.log(user);
//       return true;
//       // ...
//     } else {
//       // User is signed out.
//       // ...
//       console.log("Fail");
//       return false;
//     }
// });

export function checkUser(){
       return auth.onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              console.log(user);
              localStorage.setItem("stat", true)
              return true;
              // ...
            } else {
              // User is signed out.
              // ...
              console.log("Fail");
              localStorage.setItem("stat", false)
              return false;
            }
        });
}

