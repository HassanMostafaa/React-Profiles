import {
  LOAD_SERVER_POSTS,
  LOAD_SERVER_USERS,
  loadServerUsers,
  loadServerPosts,
} from "./adminActions";
import axios from "axios";

const URL = "http://localhost:3001";

export const initialState = {
  serverUsers: [],
  serverPosts: [],
};

export const adminReducers: any = (state = initialState, action: any) => {
  switch (action.type) {
    case LOAD_SERVER_USERS:
      return { ...state, serverUsers: action.payload };
    case LOAD_SERVER_POSTS:
      return { ...state, serverPosts: action.payload };
    default:
      return state;
  }
};

export const adminFetchServerUsers =
  () => async (dispatch: any, getState: any) => {
    const res = await axios.get(`${URL}/users`);
    const fetchedUsers = await res.data;
    dispatch(loadServerUsers(fetchedUsers));
  };

export const adminFetchServerPosts =
  () => async (dispatch: any, getState: any) => {
    const res = await axios.get(`${URL}/posts`);
    const fetchedPosts = await res.data;
    dispatch(loadServerPosts(fetchedPosts));
  };
