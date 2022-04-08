import { SET_CURRENT_USER, RESET_CURRENT_USER } from "./currentUserActionTypes";
// import axios from "axios";

interface ICurrentUser {
  id: string;
  fullName: string;
  userName: string;
  email: string;
  phone: string;
  password: string;
  posts: any[];
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

// export const setCurrentUser = (URL: string) => {
//   return {
//     type: SET_CURRENT_USER,
//     currentUser: axios.get(URL).then((res) => {
//       const fetchedCurrentUser = res.data;
//       return fetchedCurrentUser;
//     }),
//   };
// };

export const resetCurrentUser = () => {
  return {
    type: RESET_CURRENT_USER,
  };
};
