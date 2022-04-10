import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminFetchServerPosts } from "../redux/adminPrivileges/adminReducers";
import { Link } from "react-router-dom";

export const AdminPosts: React.FC = () => {
  const dispatch = useDispatch();
  const serverPosts = useSelector((state: any) =>
    state.adminReducers.serverPosts.sort((a: any, b: any) =>
      a.createdAt < b.createdAt ? 1 : -1
    )
  );

  useEffect(() => {
    dispatch(adminFetchServerPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="posts-section">
      <h2>FETCHED SERVER POSTS</h2>
      <div className="">
        {serverPosts &&
          serverPosts.map((post: any, ix: number) => (
            <Link to={`/search/${post.userId}`}>
              <div className="post" key={ix}>
                <p>{post.title}</p>
                <p>{post.body}</p>
                <p className="faded">Post ID: {post.userId}</p>
                <p className="faded">User ID: {post.id}</p>
                <p className="faded">Created At: {post.createdAt}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
