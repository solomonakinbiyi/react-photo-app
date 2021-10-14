import React from "react";
import Post from "./Post";
import "../stylesheets/Timeline.css";
import { PostContext } from "../App";
import { useContext } from "react";

function Timeline() {
  const { posts } = useContext(PostContext);

  return (
    <div className="timeline">
      {posts.length === 0 ? (
        <h1
          style={{ fontSize: "60px", color: "whitesmoke", textAlign: "center" }}
        >
          No posts
        </h1>
      ) : (
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
      )}
    </div>
  );
}

export default Timeline;
