import React from "react";
import Post from "./Post";
import "../stylesheets/Timeline.css";
import { PostContext } from "../App";
import { useContext, useState } from "react";

function Timeline() {
  const { posts, setPost } = useContext(PostContext);

  return (
    <div className="timeline">
      {posts ? (
        posts.map((s) => (
          <Post
            key={s.id}
            id={s.id}
            desc={s.desc}
            img={s.imgUrl}
            comments={s.comments.length}
            likes={s.likes}
          />
        ))
      ) : (
        <h1
          style={{ fontSize: "60px", color: "whitesmoke", textAlign: "center" }}
        >
          No posts
        </h1>
      )}
    </div>
  );
}

export default Timeline;
