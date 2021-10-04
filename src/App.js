import "./App.css";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Detail from "./components/Detail";
import AddPost from "./components/AddPost";
import Footer from "./components/Footer";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useState, createContext } from "react";

export const PostContext = createContext();
export const PostIdContext = createContext();

function App() {
  const [posts, setPost] = useState([
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
      desc: "Elon Musk",
      id: "1https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg",
      comments: [],
      likes: 0,
    },
    {
      imgUrl:
        "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_06/2746701/190208-jeff-bezos-ew-1135a.jpg",
      desc: "Jeff Bezos",
      id: "1https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_06/2746701/190208-jeff-bezos-ew-1135a.jpg",
      comments: [],
      likes: 0,
    },
    {
      imgUrl:
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987",
      desc: "Bill gates",
      id: "2https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987",
      comments: [],
      likes: 0,
    },
    {
      imgUrl:
        "https://www.entrepreneurs.ng/wp-content/uploads/2019/06/Mark-Zuckerberg.jpg",
      desc: "Mark Zuckerberg",
      id: "3https://www.entrepreneurs.ng/wp-content/uploads/2019/06/Mark-Zuckerberg.jpg",
      comments: [],
      likes: 0,
    },
    {
      imgUrl:
        "https://cdn.vox-cdn.com/thumbor/Up9eSB5r93VlpYRaq4yj8om9sYA=/0x202:2025x1552/1400x1400/filters:focal(0x202:2025x1552):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47006660/GettyImages-480103592.0.jpg",
      desc: "Jack Dorsey",
      id: "4https://cdn.vox-cdn.com/thumbor/Up9eSB5r93VlpYRaq4yj8om9sYA=/0x202:2025x1552/1400x1400/filters:focal(0x202:2025x1552):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47006660/GettyImages-480103592.0.jpg",
      comments: [],
      likes: 0,
    },
  ]);
  const [postId, setPostId] = useState(0);
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <PostIdContext.Provider value={{ postId, setPostId }}>
          <Switch>
            <Route path="/detail/:id">
              <PostContext.Provider value={{ posts, setPost }}>
                <Detail></Detail>
              </PostContext.Provider>
            </Route>
            <Route path="/addpost">
              <PostContext.Provider value={{ posts, setPost }}>
                <AddPost></AddPost>
              </PostContext.Provider>
            </Route>
            <Route path="/">
              <PostContext.Provider value={{ posts, setPost }}>
                <Timeline></Timeline>
              </PostContext.Provider>
            </Route>
          </Switch>
        </PostIdContext.Provider>
      </div>
    </Router>
  );
}

export default App;
