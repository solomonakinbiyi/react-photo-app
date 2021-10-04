import React, { useContext, useEffect } from "react";
// import img from "../images/dino-reichmuth-A5rCN8626Ck-unsplash.jpg";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import IconButton from "@material-ui/core/IconButton";
import "../stylesheets/Post.css";
import { Link } from "react-router-dom";
import { PostContext, PostIdContext } from "../App";
import DeleteIcon from "@material-ui/icons/Delete";

function Post({ id, desc, img, likes, comments }) {
  const { setPostId } = useContext(PostIdContext);
  const { posts, setPost } = useContext(PostContext);
  let postIndex = 0;
  const incrementLikes = (postIdparam, el) => {
    var value = undefined;
    for (var i = 0; i < el.length; i++) {
      value = el[i].id;
      if (postIdparam === value) {
        posts[i].likes++;
        postIndex = i;
        console.log(posts[i].likes);
        break;
      }
    }
  };

  const getLikes = (postIdparam, el) => {
    var value = undefined;
    var imgvalue = "";
    for (var i = 0; i < el.length; i++) {
      value = el[i].id;
      if (postIdparam === value) {
        imgvalue = el[i].likes;
        postIndex = i;
        console.log(postIndex);
        break;
      }
    }
    return imgvalue;
  };

  const deletePost = (postIdparam, el) => {
    var value = undefined;
    var imgvalue = "";
    for (var i = 0; i < el.length; i++) {
      value = el[i].id;
      if (postIdparam === value) {
        imgvalue = el[i].likes;
        el.splice(i, 1)
        break;
      }
    }
  };
  return (
    <div className="post">
      <div className="post__top">{desc}</div>
      <div className="post__middle">
        <img src={img} alt="" />
      </div>
      <div className="post__bottom">
        <IconButton
          className="post__bottom__icnBtn"
          onClick={() => {
            incrementLikes(id, posts);
          }}
        >
          <div className="love">
            <FavoriteIcon className="love__icon" />
            &nbsp;{id ? getLikes(id, posts) : ""}
          </div>
        </IconButton>
        <Link
          to={{ pathname: `/detail/${id}` }}
          onClick={() => {
            setPostId(id);
          }}
        >
          <IconButton className="post__bottom__icnBtn">
            <div className="comment">
              <CommentIcon className="comment__icon" />
              &nbsp;{comments}
            </div>
          </IconButton>
        </Link>
        <IconButton className="post__bottom__icnBtn">
          <div className="save">
            <DeleteIcon
              className="save__icon"
              onClick={() => {
                deletePost(id, posts);
              }}
            />
          </div>
        </IconButton>
      </div>
    </div>
  );
}

export default Post;
