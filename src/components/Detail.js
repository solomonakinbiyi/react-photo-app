import React, { useContext } from "react";
import "../stylesheets/Detail.css";
import img from "../images/dino-reichmuth-A5rCN8626Ck-unsplash.jpg";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import IconButton from "@material-ui/core/IconButton";
import { Link, useParams } from "react-router-dom";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { PostContext, PostIdContext } from "../App";

function Detail() {
  const { id } = useParams();
  const { posts, setPost } = useContext(PostContext);
  const { postId } = useContext(PostIdContext);
  const [commentInput, setCommentInput] = React.useState({
    comment: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);
  let postIndex = 0;

  const handleInput = (e) => {
    setCommentInput({
      ...commentInput,
      [e.target.name]: e.target.value,
    });
    console.log(commentInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handlesubmit called");
    setIsLoading(true);
    setTimeout(function () {
      addComment(commentInput);
      setIsLoading(false);
    }, 500);
  };

  const addComment = (com) => {
    var value = undefined;
    var postRow = "";
    for (var i = 0; i < posts.length; i++) {
      value = posts[i].id;
      if (postId === value) {
        posts[i].comments.push(commentInput.comment);
        console.log(posts[i].comments);
        break;
      }
    }
  };

  const getPostDesc = (postIdparam, el) => {
    var value = undefined;
    var descvalue = "";
    for (var i = 0; i < el.length; i++) {
      value = el[i].id;
      if (postIdparam === value) {
        descvalue = el[i].desc;
        break;
      }
    }
    return descvalue;
  };

  const getPostImage = (postIdparam, el) => {
    var value = undefined;
    var imgvalue = "";
    for (var i = 0; i < el.length; i++) {
      value = el[i].id;
      if (postIdparam === value) {
        imgvalue = el[i].imgUrl;
        postIndex = i;
        console.log(postIndex);
        break;
      }
    }
    return imgvalue;
  };

  return (
    <div className="detail">
      <div className="detail__goBack">
        <Link to="/">
          <IconButton>
            <NavigateBeforeIcon className="goBack__icn"></NavigateBeforeIcon>
          </IconButton>
        </Link>
      </div>
      <div className="detail__post">
        <div className="post__top">
          {postId ? getPostDesc(postId, posts) : ""}
        </div>
        <div className="post__middle">
          <img src={postId ? getPostImage(postId, posts) : ""} alt="" />
        </div>
        <div className="post__bottom">
          <IconButton className="post__bottom__icnBtn">
            <div className="love">
              <FavoriteIcon className="love__icon" />
              &nbsp;{posts[postIndex].likes}
            </div>
          </IconButton>
          <IconButton className="post__bottom__icnBtn">
            <div className="comment">
              <CommentIcon className="comment__icon" />
              &nbsp;{posts[postIndex].comments.length}
            </div>
          </IconButton>
          <IconButton className="post__bottom__icnBtn">
            <div className="save">
              {/* <BookmarkIcon className="save__icon" /> */}
            </div>
          </IconButton>
        </div>
      </div>
      <div className="detail__comment">
        <div className="comment__top">Comments</div>
        <br />

        {posts[postIndex].comments.map((s, i) => (
          <div key={i} className="comment__items">
            <div>{s}</div>
          </div>
        ))}
        <form action="" onSubmit={handleSubmit}>
          <div className="comment__items comment__add__item">
            <div>
              <input
                type="text"
                placeholder="Add your comment here..."
                name="comment"
                value={commentInput.comment}
                onChange={handleInput}
                onKeyUp={handleInput}
              />
            </div>
          </div>
          <br />
          <button
            className="add__btn"
            type="submit"
            disabled={isLoading}
            style={{
              backgroundColor: isLoading ? "grey" : "rgb(0, 174, 255)",
            }}
          >
            Add comment
          </button>
        </form>
      </div>
    </div>
  );
}

export default Detail;
