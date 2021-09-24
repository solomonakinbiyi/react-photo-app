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

function App() {
  const [posts, setPost] = useState([]);

  return (
    <Router>
      <div className="App">
        <Header></Header>
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
      </div>
    </Router>
  );
}

export default App;
