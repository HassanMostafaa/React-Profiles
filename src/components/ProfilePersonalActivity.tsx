import React, { useState } from "react";
import "./ProfilePersonalActivity.scss";
import { MdArticle } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { useSelector } from "react-redux";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuid } from "uuid";

export const ProfilePersonalActivity: React.FC<any> = ({
  posts,
  getCurrentUserPosts,
}) => {
  const [addPostForm, setAddPostForm] = useState(false);
  const currentUser = useSelector(
    (state: any) => state.currentUserReducer.currentUser[0]
  );
  const postsURL = `https://json-server-dep.herokuapp.com/posts`;
  const date = new Date();

  const handleAddPost = async (e: any) => {
    e.preventDefault();
    const postTitle = e.target.postTitle.value;
    const postBody = e.target.postBody.value;

    await axios.post(postsURL, {
      id: uuid(),
      userId: currentUser.id,
      title: postTitle,
      body: postBody,
      createdAt: date,
    });

    getCurrentUserPosts(
      `https://json-server-dep.herokuapp.com/users/${currentUser.id}/posts`
    );
    setAddPostForm(false);
  };

  const handleDeletePost = async (id: string) => {
    await axios.delete(`${postsURL}/${id}`);
    getCurrentUserPosts(
      `https://json-server-dep.herokuapp.com/users/${currentUser.id}/posts`
    );
  };

  return (
    <div className="personal-personal-activity-card">
      <div className="activity-header">
        <h2>Personal Activity</h2>
        <IoIosAddCircle
          onClick={() => setAddPostForm(!addPostForm)}
          style={{ fontSize: "35px" }}
        />
      </div>
      <div>
        {addPostForm && (
          <div className="add-post-area">
            <form onSubmit={(e) => handleAddPost(e)} className="add-post-form">
              <h2>Add Post</h2>
              <input type="text" placeholder="Title" name="postTitle" />
              <textarea placeholder="Post Body" name="postBody" />
              <input type="submit" value={"POST"} />
            </form>
          </div>
        )}

        {posts.length < 1
          ? "No Posted Posts Yet"
          : posts.map((post: any, ix: number) => (
              <div key={ix} className="post-card">
                <p
                  className="del-post"
                  onClick={() => handleDeletePost(post.id)}
                >
                  <AiFillDelete />
                </p>

                <p style={{ fontSize: "30px" }}>{post.title}</p>
                <p>
                  Body : <span>{post.body}</span>
                </p>

                <p
                  style={{
                    fontSize: "14px",
                    marginTop: "60px",
                    color: "grey",
                  }}
                >
                  {" "}
                  <span style={{ display: "block", margin: "5px 0" }}>
                    Posted: <span>{post.createdAt}</span>
                  </span>
                  <MdArticle style={{ transform: "translateY(2px)" }} />
                  <span>Post ID:</span> <span>{post.id}</span>{" "}
                </p>
              </div>
            ))}
      </div>
    </div>
  );
};
