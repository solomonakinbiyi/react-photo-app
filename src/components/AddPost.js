import React, { useContext } from "react";
import { PostContext } from "../App";
import { useHistory } from "react-router-dom";
import "../stylesheets/Addpost.css";

function AddPost() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [postInput, setPostInput] = React.useState({
    imgUrl: "",
    desc: "",
  });
  const { posts, setPost } = useContext(PostContext);

  const handleInput = (e) => {
    setPostInput({
      ...postInput,
      [e.target.name]: e.target.value,
    });
    console.log(postInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(function () {
      addPost(postInput);
      setIsLoading(false);
      routeChange();
    }, 500);
  };

  const [id, setId] = React.useState(posts.length);

  const addPost = (post) => {
    setId((prevState) => prevState + 1);
    setPost([
      ...posts,
      {
        imgUrl: post.imgUrl,
        desc: post.desc,
        id: id + post.imgUrl,
        comments: [],
        likes: 0,
      },
    ]);
  };

  const history = useHistory();

  const routeChange = () => {
    let path = `/`;
    history.push(path);
  };

  return (
    <div className="addpost">
      <div className="addpost__container">
        <form action="" onSubmit={handleSubmit}>
          <div className="comment__items comment__add__item">
            <div>
              <input
                type="text"
                placeholder="Add photo url here..."
                name="imgUrl"
                value={postInput.imgUrl}
                onChange={handleInput}
                onKeyUp={handleInput}
              />
            </div>
          </div>
          <div className="comment__items comment__add__item">
            <div>
              <input
                type="text"
                placeholder="Add description here..."
                name="desc"
                value={postInput.desc}
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
            Add post
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPost;
