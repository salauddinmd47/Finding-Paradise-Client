import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { googleSignIn, logOut, user } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";
  const handleGoogleSignIn = () => {
    googleSignIn();
    history.push(redirect_uri);
  };
  return (
    <div>
      <div className="bg-secondary text-center py-5 my-5 w-25 mx-auto">
        <h2 className="text-warning">Please SignIn</h2>
        <button   onClick={handleGoogleSignIn} className="btn-sm-warning bg-success mt-5 d-inline-block">
          SignIn with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
