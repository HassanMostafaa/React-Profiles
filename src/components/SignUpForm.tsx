import React, { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
// import { useNavigate } from "react-router-dom";

export const SignUpForm: React.FC<any> = ({ setSignInFormState }): any => {
  const [errorMsg, setErrorMsg] = useState("");
  const mainURL = "https://json-server-dep.herokuapp.com/users";
  const date = new Date();
  // const navigate = useNavigate();
  const handleSignUpForm = async (e: any) => {
    e.preventDefault();
    const fullNameInput = e.target.fullName.value;
    const emailInput = e.target.email.value;
    const passwordInput = e.target.signUpPassword.value;
    const rePasswordInput = e.target.rePassword.value;
    const userNameInput = e.target.userName.value;
    const phoneNumValue = e.target.phoneNum.value;

    try {
      const res = await axios.get(`${mainURL}?email=${emailInput}`);
      const result = await res.data;

      if (
        !fullNameInput ||
        !emailInput ||
        !passwordInput ||
        !rePasswordInput ||
        !userNameInput ||
        !phoneNumValue
      ) {
        setErrorMsg("Make Sure you Entered a valid Values");
      } else if (passwordInput !== rePasswordInput) {
        setErrorMsg("Confirm Password Input doesn't Match");
      } else if (result.length !== 0) {
        setErrorMsg("Email Address already Used");
      } else {
        try {
          await axios.post(mainURL, {
            id: uuid(),
            fullName: fullNameInput,
            userName: userNameInput,
            email: emailInput,
            phone: phoneNumValue,
            password: passwordInput,
            privilegeLevel: "user",
            createdAt: date,
          });
          alert("Login with the new user information");
          setSignInFormState(true);
        } catch (error) {
          setErrorMsg(JSON.stringify(error));
        }
      }
    } catch (error) {
      setErrorMsg(
        `${error} : Please, Make sure the backend json-server is running if you are not sure please contact the site Admin`
      );
    }
  };
  return (
    <>
      <h2>Sign Up</h2>
      <p>
        Quick and free sign up just fill in all the information to create an
        account
      </p>
      <form onSubmit={(e) => handleSignUpForm(e)} className="sign-up-form">
        <p
          style={{
            color: "rgb(233, 50, 50)",
            padding: "10px",
          }}
        >
          {errorMsg}
        </p>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          autoComplete="false"
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail "
          autoComplete="false"
        />
        <input
          type="text"
          name="userName"
          placeholder="User Name"
          autoComplete="false"
        />
        <input
          type="text"
          name="phoneNum"
          placeholder="Phone"
          autoComplete="false"
        />
        <input
          type="password"
          name="signUpPassword"
          placeholder="Password"
          autoComplete="false"
        />
        <input
          type="password"
          name="rePassword"
          placeholder="Re-Enter Password"
          autoComplete="false"
        />
        <input type="submit" value={"SIGN UP"} />
      </form>
      <p className="switch-forms">
        Already have an account?{" "}
        <span onClick={() => setSignInFormState(true)}> Sign In</span>
      </p>
    </>
  );
};
