import React from 'react'
import Post from './Post'
import '../stylesheets/Timeline.css'
import { PostContext } from "../App";
import { useContext, useState } from "react";

function Timeline() {
    const { posts, setPost } = useContext(PostContext);
    

    return (
      <div className="timeline">
        {posts.map((s) => (
          <Post key={s.id} id={s.id} desc={s.desc} img={s.imgUrl} />
        ))}
      </div>
    );
}

export default Timeline
