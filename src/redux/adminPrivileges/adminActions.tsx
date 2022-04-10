export const LOAD_SERVER_USERS = "LOAD_SERVER_USERS";
export const LOAD_SERVER_POSTS = "LOAD_SERVER_POSTS";

export const loadServerUsers = (users: any) => {
  return {
    type: LOAD_SERVER_USERS,
    payload: users,
  };
};

export const loadServerPosts = (posts: any) => {
  return {
    type: LOAD_SERVER_POSTS,
    payload: posts,
  };
};
