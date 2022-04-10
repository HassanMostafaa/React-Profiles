import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./personalInfo.scss";
import { BsPersonSquare } from "react-icons/bs";
import { AiFillEdit, AiOutlineClose } from "react-icons/ai";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "../redux/currentUser/currentUserActions";
import { resetCurrentUser } from "./../redux/currentUser/currentUserActions";

export const PersonalInfo: React.FC = () => {
  const dispatch = useDispatch();
  const mainURL = "http://localhost:3001/users/";
  const [newFullName, setNewFullName] = useState("");
  const [newPhoneNumber, setnewPhoneNumber] = useState("");
  const currentUser = useSelector(
    (state: any) => state.currentUserReducer.currentUser[0]
  );

  const [showEdit, setShowEdit] = useState(false);
  // const navigate = useNavigate();
  const handleEditProfile = async (e: any) => {
    e.preventDefault();
    const newData = {
      ...currentUser,
      fullName: newFullName,
      phone: newPhoneNumber,
    };
    await axios.put(`${mainURL}/${currentUser.id}`, newData);
    setShowEdit(false);

    const res = await axios.get(mainURL);
    const updateUser = await res.data.find((x: any) => x.id === currentUser.id);
    dispatch(setCurrentUser(updateUser, currentUser.posts));
  };

  const handleDelAcc = async () => {
    if (window.confirm("ARE YOU SURE YOU WANT TO DELETE YOUR ACCOUNT ?")) {
      await axios.delete(`${mainURL}/${currentUser.id}`);
      dispatch(resetCurrentUser());
    } else {
      setShowEdit(false);
    }
  };
  return (
    <div className="personal-info-card">
      <span
        style={{
          float: "right",
          color: "#333",
          background: "#f4f4f4",
          padding: "5px 8px",
          borderRadius: "50%",
        }}
      >
        <AiFillEdit
          style={{
            transform: "translateY(3px)",
          }}
          onClick={() => {
            setNewFullName(currentUser.fullName);
            setnewPhoneNumber(currentUser.phone);
            setShowEdit(true);
          }}
        />
      </span>
      <h1>
        Personal Information{" "}
        <BsPersonSquare style={{ transform: "translateY(5px)" }} />
      </h1>
      <p>
        User ID:
        <span> {currentUser && currentUser.id} </span>
      </p>

      <p>
        Full Name:
        <span> {currentUser && currentUser.fullName}</span>
      </p>

      <p>
        Email:
        <span> {currentUser && currentUser.email}</span>
      </p>
      <p>
        Phone Number:
        <span>{currentUser && currentUser.phone}</span>
      </p>

      {showEdit && (
        <div className="edit-profile-area">
          <AiOutlineClose
            style={{
              position: "absolute",
              top: "30px",
              right: "30px",
              fontSize: "30px",
            }}
            onClick={() => setShowEdit(false)}
          />

          <div className="edit-profile-form">
            <form onSubmit={(e) => handleEditProfile(e)}>
              <h1>Edit Personal Information</h1>
              <p>Alot more Option will be available soon</p>
              <input
                type="text"
                placeholder="Full Name"
                value={newFullName}
                name="newFullName"
                onChange={(e) => setNewFullName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Number"
                name="newNum"
                value={newPhoneNumber}
                onChange={(e) => setnewPhoneNumber(e.target.value)}
              />
              <input type="submit" value="Confirm" />
            </form>
            <button className="del-acc" onClick={() => handleDelAcc()}>
              Delete Account
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
