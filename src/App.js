import "./App.css";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div>
      <Router>
      <Layout>
        
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              Users Page
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route><NotFound /></Route>
          </Switch>
        
      </Layout>
      </Router>
    </div>
  );
}

export default App;
