import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../components/search.scss";

export const UserProfile: React.FC = () => {
  const params = useParams();
  const URL = `http://localhost:3001/users/${params.id}`;
  const [user, setUser] = useState<any>([{}]);
  const [userPosts, setuserPosts] = useState<any>([{}]);

  const getSelectedUser = async () => {
    const res = await axios.get(URL);
    const userDetails = await res.data;
    setUser(userDetails);
    console.log(user);
  };

  const getSelectedUserPosts = async () => {
    const res = await axios.get(`${URL}/posts`);
    const postsDetails = await res.data;
    setuserPosts(postsDetails);
    console.log(userPosts);
  };

  useEffect(() => {
    getSelectedUser();
    getSelectedUserPosts();
  }, []);

  return (
    <div className="user-profile">
      <h1>Profile Information</h1>
      {user && (
        <>
          <p>{user[0].email}</p>
          <p>{user[0].fullName}</p>
        </>
      )}

      <h1>Recent Activity</h1>
      {userPosts &&
        userPosts.map((post: any, ix: number) => (
          <div key={ix}>
            <hr />
            <p>{post.title}</p>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
};
