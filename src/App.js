import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Blocks(props) {
  console.log(props);
  return <h2>{props.match.url}</h2>
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/editor/1000/2001">2001</Link>
            </li>
            <li>
              <Link to="/editor/1000/2002">2002</Link>
            </li>
            <li>
              <Link to="/editor/1000/2003">2003</Link>
            </li>
          </ul>
        </nav>

        <Route path="/editor/:learningObjectId/:blockId" exact render={(props)=> {
          return <Blocks {...props} />
        }} />
       
      </div>
    </Router>
  );
}

export default AppRouter;


