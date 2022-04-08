import { SET_CURRENT_USER, RESET_CURRENT_USER } from "./currentUserActionTypes";

const initialState = {
  currentUser: [
    // {
    //   id: "123456",
    //   fullName: "Hassan Mostafa Hassan",
    //   userName: "hassan2251",
    //   email: "hassan@hassan.com",
    //   phone: "01144225545",
    // },
  ],
  loggedin: false,
};

const currentUserReducer: any = (state = initialState, action: any): any => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: [
          { ...action.currentUser, posts: action.currentUserPosts },
        ],

        loggedin: true,
      };
    case RESET_CURRENT_USER:
      return {
        ...state,
        currentUser: [],
        loggedin: false,
      };

    default:
      return state;
  }
};
export default currentUserReducer;
