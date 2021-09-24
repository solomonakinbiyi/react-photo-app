import React from "react";
// import img from "../images/dino-reichmuth-A5rCN8626Ck-unsplash.jpg";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import IconButton from "@material-ui/core/IconButton";
import "../stylesheets/Post.css";
import { Link } from "react-router-dom";
import { PostContext } from "../App";

function Post({ id, desc, img, likes, comments }) {
  return (
    <div className="post">
      <div className="post__top">{desc}</div>
      <div className="post__middle">
        <img src={img} alt="" />
      </div>
      <div className="post__bottom">
        <IconButton className="post__bottom__icnBtn">
          <div className="love">
            <FavoriteIcon className="love__icon" />
            &nbsp;{likes}
          </div>
        </IconButton>
        <Link to={{ pathname: `/detail/${id}` }}>
          <IconButton className="post__bottom__icnBtn">
            <div className="comment">
              <CommentIcon className="comment__icon" />
              &nbsp;{comments}
            </div>
          </IconButton>
        </Link>
        <IconButton className="post__bottom__icnBtn">
          <div className="save">
            <BookmarkIcon className="save__icon" />
          </div>
        </IconButton>
      </div>
    </div>
  );
}

export default Post;
