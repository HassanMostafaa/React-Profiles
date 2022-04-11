import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../components/search.scss";

export const UserProfile: React.FC = () => {
  const params = useParams();
  const URL = `https://json-server-dep.herokuapp.com/users/${params.id}`;
  const [user, setUser] = useState<any>({});
  const [userPosts, setuserPosts] = useState<any>([]);

  const getSelectedUser = async () => {
    const res = await axios.get(URL);
    const userDetails = await res.data;
    setUser(userDetails);
  };

  const getSelectedUserPosts = async () => {
    const res = await axios.get(`${URL}/posts`);
    const postsDetails = await res.data;
    setuserPosts(
      postsDetails.sort((a: any, b: any) =>
        a.createdAt < b.createdAt ? 1 : -1
      )
    );
  };

  useEffect(() => {
    getSelectedUser();
    getSelectedUserPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="user-profile">
      <h1>Profile Information</h1>
      {user && (
        <>
          <p>{user.email}</p>
          <p>{user.fullName}</p>
          <p>{userPosts && userPosts.length} Posts Created with this Profile</p>
        </>
      )}

      <h1>Recent Activity</h1>

      {userPosts &&
        userPosts.map((post: any, ix: number) => (
          <div key={ix} className="card">
            <p>{post.title}</p>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
};
