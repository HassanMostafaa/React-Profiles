import { Link } from "react-router-dom";
import "./nav.scss";

// import currentUserReducer from "./../redux/currentUser/currentUserReducer";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="logo">
          <h3>
            <Link to="/" style={{ marginLeft: "auto" }}>
              PROFILES
            </Link>{" "}
            <span
              style={{ fontSize: "12px", letterSpacing: "0", color: "grey" }}
            >
              © 2021-2022 Hassan Mostafa | All Rights Reserved
            </span>
          </h3>
        </div>
      </div>
    </>
  );
};
