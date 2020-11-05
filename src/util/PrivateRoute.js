import React from "react";
import { Redirect, Route} from "react-router-dom";
import "firebase/auth";
import { checkUser} from "./login";

checkUser()
const PrivateRoute = ({ component: Component, ...rest }) => {
let userStatus = localStorage.getItem('stat');
  return (
    <Route>
    {(userStatus === "true")?
      <Component {...rest} />
    :
      <Redirect to="/" />
    }
  </Route>
  );
};
export default PrivateRoute;