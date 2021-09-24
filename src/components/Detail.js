import React, { useContext } from "react";
import "../stylesheets/Detail.css";
import img from "../images/dino-reichmuth-A5rCN8626Ck-unsplash.jpg";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CommentIcon from "@material-ui/icons/Comment";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import IconButton from "@material-ui/core/IconButton";
import { Link, useParams } from "react-router-dom";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { PostContext } from "../App";

function Detail() {
  const { id } = useParams();
  const { posts, setPost } = useContext(PostContext);
  // const de = posts?.map((v) => v);
  // const vv = de?.filter((p, i, arr) => arr[i]?.id === id);
  // const fn = vv[0]?.desc;

  const getData = (el) => {
    // let descccc = el.filter((item) => item?.id === 1)?.[0]?.desc;
    var value = "";
    var descvalue = "";
    for (var i = 0; i < el.length; i++) {
      value = el[i].id;
      if (value === id) {
        descvalue = el[i].desc;
        break;
      }
    }
    return descvalue;
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
          {
            // posts.find(({ id }) => id === id)?.desc
            // posts.filter((item) => item?.id === 2)?.[0]?.desc
            // posts ? posts.find(({ id }) => id === id)?.desc : ""
            posts ? posts[1].desc : "null"
          }
        </div>
        <div className="post__middle">
          <img src={posts.find(({ id }) => id === id)?.imgUrl} alt="" />
        </div>
        <div className="post__bottom">
          <IconButton className="post__bottom__icnBtn">
            <div className="love">
              <FavoriteIcon className="love__icon" />
              &nbsp;25
            </div>
          </IconButton>
          <Link to="/detail" className="header__link">
            <IconButton className="post__bottom__icnBtn">
              <div className="comment">
                <CommentIcon className="comment__icon" />
                &nbsp;5
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
      <div className="detail__comment">
        <div className="comment__top">Comments</div>
        <br />
        <div className="comment__items">
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            ipsum nihil consequuntur
          </div>
        </div>
        <div className="comment__items">
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            ipsum nihil consequuntur
          </div>
        </div>
        <div className="comment__items">
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            ipsum nihil consequuntur
          </div>
        </div>
        <div className="comment__items">
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            ipsum nihil consequuntur
          </div>
        </div>
        <div className="comment__items comment__add__item">
          <div>
            <input type="text" placeholder="Add your comment here..." />
          </div>
        </div>
        <br />
        <button className="add__btn">Add comment</button>
      </div>
    </div>
  );
}

export default Detail;
