import React, { useContext } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import IconButton from "@material-ui/core/IconButton";
import "../stylesheets/Post.css";
import { Link } from "react-router-dom";
import { PostContext } from "../App";
import DeleteIcon from "@material-ui/icons/Delete";

function Post({ id, desc, img, likes, comments }) {
  const { posts, setPost } = useContext(PostContext);
  
  const incrementLikes = (postIdparam, el) => {
    var value = undefined;
    for (var i = 0; i < el.length; i++) {
      value = el[i].id;
      if (postIdparam === value) {
        el[i].likes++;
        setPost([...el]);
        console.log(el[i].likes);
        break;
      }
    }
  };

  const deletePost = (postIdparam, el) => {
    var value = undefined;
    for (var i = 0; i < el.length; i++) {
      value = el[i].id;
      if (postIdparam === value) {
        el.splice(i, 1)
        setPost([...el]);
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
            &nbsp;{id ? posts.filter((item) => item?.id === id)?.[0]?.likes : ""}
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
