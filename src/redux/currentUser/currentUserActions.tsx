import { SET_CURRENT_USER, RESET_CURRENT_USER } from "./currentUserActionTypes";
// import axios from "axios";

interface ICurrentUser {
  readonly id: string;
  fullName: string;
  userName: string;
  email: string;
  phone: string;
  password: string;
  posts: any[];
  readonly privilegeLevel: string;
  createdAt: string;
}

export const setCurrentUser = (
  currentUser: ICurrentUser,
  currentUserPosts: any[]
) => {
  return {
    type: SET_CURRENT_USER,
    currentUser,
    currentUserPosts,
  };
};

export const resetCurrentUser = () => {
  return {
    type: RESET_CURRENT_USER,
  };
};
