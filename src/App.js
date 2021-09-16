import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import { useContext } from "react";
import { DataProvider, GlobalState } from "./GlobalState";

function App() {
  const token = localStorage.getItem("token");
  console.log(token, "app.js");

  const state = useContext(GlobalState);
  // const [isLogged] = state.userAPI.isLogged
  console.log("islogged", state);
  return (
    <DataProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
        </Switch>
      </Router>
    </DataProvider>
  );
}

export default App;
