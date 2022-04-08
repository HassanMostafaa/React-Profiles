import React, { useState } from "react";
import { SignInForm } from "../components/SignInForm";
import { SignUpForm } from "../components/SignUpForm";
import "../components/signInPageStyle.scss";

export const SignInPage: React.FC<any> = () => {
  const [signInFormState, setSignInFormState] = useState(true);
  return (
    <div className="sign-in-area" style={{ marginBlock: "50px" }}>
      <div className="sign-in-card">
        {signInFormState ? (
          <SignInForm setSignInFormState={setSignInFormState} />
        ) : (
          <SignUpForm setSignInFormState={setSignInFormState} />
        )}
      </div>
    </div>
  );
};
