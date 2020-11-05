import firebase from "./firebase";
const auth = firebase.auth();

export async function newSignUp(email, password) {
    try {
        let response = await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + errorMessage);
    }
      
}

export async function SignIn(email, password, cb) {
    try {
        let response = await auth.signInWithEmailAndPassword(email, password);
        if(response){
        cb("Signed In Successfully");

        setInterval(()=>{
            cb(null);
        },2000);
        }
    } catch (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + errorMessage);
    }
      
}

export async function SignOut(cb) {
    try {
        let response = await auth.signOut();
        if(response){
            cb("Signed Out Successfully");
            setInterval(()=>{
                cb(null);
            },2000);
            }
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

