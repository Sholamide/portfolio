import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import NewPage from "./pages/signin";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        {/* <Route path="/" component={NewPage} exact /> */}
        <Route />
      </Switch>
    </Router>
  );
}

export default App;
