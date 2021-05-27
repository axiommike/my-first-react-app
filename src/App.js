import "./App.css";
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import About from "./components/About";
import Archive from "./components/Archive";
import Single from "./components/Single";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Router>
      <Layout>
        
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/blog">
              <Archive />
            </Route>
            <Route path="/post/:slug" component={Single}>
            
            </Route>
            <Route path="/contact" component={Contact}>
            </Route>
            <Route exact path="/">
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
