import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { PersonalInfo } from "../components/PersonalInfo";
import { ProfilePersonalActivity } from "../components/ProfilePersonalActivity";

export const Profile: React.FC<any> = () => {
  const [currentUserPosts, setCurrentUserPosts] = useState([]);
  const currentUser = useSelector(
    (state: any) => state.currentUserReducer.currentUser[0]
  );
  const postsReqURL = `https://json-server-dep.herokuapp.com/users/${currentUser.id}/posts`;

  const getCurrentUserPosts = async (URL: string) => {
    const res = await axios.get(URL);
    const userPosts = await res.data;
    setCurrentUserPosts(
      userPosts.sort((a: any, b: any) => (a.createdAt < b.createdAt ? 1 : -1))
    );
  };

  useEffect(() => {
    getCurrentUserPosts(postsReqURL);
  }, [postsReqURL]);

  return (
    <div>
      <PersonalInfo />
      <ProfilePersonalActivity
        posts={currentUserPosts}
        getCurrentUserPosts={getCurrentUserPosts}
      />
    </div>
  );
};
