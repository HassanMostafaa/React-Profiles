import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./../redux/currentUser/currentUserActions";
export const SignInForm: React.FC<any> = ({ setSignInFormState }): any => {
  const dispatch = useDispatch();
  const usersURL = "https://json-server-dep.herokuapp.com/users";
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [errorMsg] = useState("Invalid Email Address or Password");

  const handleSignIn = async (e: any) => {
    e.preventDefault();
    const emailInput = e.target.email.value;
    const passwordInput = e.target.signInPassword.value;
    const res = await axios.get(usersURL);

    //VALIDATION FROM DATABASE
    const currentUserState = await res.data.find(
      (x: any) => x.email === emailInput && x.password === passwordInput
    );

    if (currentUserState) {
      try {
        const postsRes = await axios.get(
          `${usersURL}/${currentUserState.id}/posts`
        );
        const userPosts = postsRes.data;
        dispatch(setCurrentUser(currentUserState, userPosts));
        // dispatch(setCurrentUser(`${usersURL}/${currentUserState.id}`));
      } catch (error: any) {
        setShowErrorMsg(false);
      }
      setShowErrorMsg(false);
    } else {
      setShowErrorMsg(true);
    }
  };

  return (
    <>
      <h2>Sign In</h2>
      <p>Enter Your Email and Password to Sign in</p>
      <form onSubmit={(e) => handleSignIn(e)} className="sign-in-form">
        {showErrorMsg && (
          <div
            className="alert"
            style={{
              color: "rgb(233, 50, 50)",
              background: "rgb(233, 50, 50,.1)",
              padding: "10px",
            }}
          >
            {errorMsg}
          </div>
        )}
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          autoComplete="false"
        />
        <input
          type="password"
          name="signInPassword"
          placeholder="Password"
          autoComplete="false"
        />
        <input type="submit" value={"SIGN IN"} />
      </form>
      <p className="switch-forms">
        Dont have an account?{" "}
        <span onClick={() => setSignInFormState(false)}> Sign Up</span>
      </p>
    </>
  );
};
