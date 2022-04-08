import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
import { useSelector, useDispatch } from "react-redux";
import { resetCurrentUser } from "../redux/currentUser/currentUserActions";

// import currentUserReducer from "./../redux/currentUser/currentUserReducer";

export const Nav: React.FC<any> = () => {
  const dispatch = useDispatch();
  const state = useSelector(
    (state: any) => state.currentUserReducer.currentUser[0]
  );
  return (
    <nav>
      <div className="logo">
        <h3>
          <Link to="/">PROFILES</Link>
        </h3>
      </div>

      <div className="menu">
        {/* <Link to="/">AnotherLink</Link> */}

        {state ? (
          <Link
            to="/"
            className="nav-call-to-action"
            onClick={() => {
              dispatch(resetCurrentUser());
            }}
          >
            Logout
          </Link>
        ) : (
          <Link to="/" className="nav-call-to-action">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};
