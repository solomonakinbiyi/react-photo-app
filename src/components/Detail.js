import React, { useContext } from "react";
import "../stylesheets/Detail.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import IconButton from "@material-ui/core/IconButton";
import { Link, useParams } from "react-router-dom";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { PostContext} from "../App";

function Detail() {
  const { id } = useParams();
  const { posts } = useContext(PostContext);
  const [commentInput, setCommentInput] = React.useState({
    comment: "",
  });
  
  const [isLoading, setIsLoading] = React.useState(false);

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
    for (var i = 0; i < posts.length; i++) {
      value = posts[i].id;
      if (id === value) {
        posts[i].comments.push(commentInput.comment);
        console.log(posts[i].comments);
        break;
      }
    }
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
          {id ? posts.filter((item) => item?.id === id)?.[0]?.desc : ""}
        </div>
        <div className="post__middle">
          <img
            src={id ? posts.filter((item) => item?.id === id)?.[0]?.imgUrl : ""}
            alt=""
          />
        </div>
        <div className="post__bottom">
          <IconButton className="post__bottom__icnBtn">
            <div className="love">
              <FavoriteIcon className="love__icon" />
              &nbsp;
              {id ? posts.filter((item) => item?.id === id)?.[0]?.likes : ""}
            </div>
          </IconButton>
          <IconButton className="post__bottom__icnBtn">
            <div className="comment">
              <CommentIcon className="comment__icon" />
              &nbsp;
              {id
                ? posts.filter((item) => item?.id === id)?.[0]?.comments.length
                : ""}
            </div>
          </IconButton>
          <IconButton className="post__bottom__icnBtn">
            <div className="save"></div>
          </IconButton>
        </div>
      </div>
      <div className="detail__comment">
        <div className="comment__top">
          Comments{" "}
          <span id="pstTitleForMobile">
            for: '{id ? posts.filter((item) => item?.id === id)?.[0]?.desc : ""}
            '
          </span>
        </div>
        <br />

        {posts
          .filter((item) => item?.id === id)?.[0]
          ?.comments.map((s, i) => (
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
