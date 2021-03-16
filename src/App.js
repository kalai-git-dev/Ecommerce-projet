import React, { useState } from "react";
import Cookie from "js-cookie";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Acceuil from "./pages/Acceuil";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";
import Publish from "./pages/Publish";

function App() {
  const [token, setToken] = useState(Cookie.get("userToken") || null);
  const [name, setName] = useState("");

  const setUser = (tokenToSet, userName) => {
    if (tokenToSet && userName) {
      Cookie.set("userToken", token);
      setToken(tokenToSet);
      setName(userName);
    } else {
      Cookie.remove("userToken");
      setToken(null);
    }
  };
  console.log(token);

  return (
    <Router>
      <Header token={token} setUser={setUser} name={name} />
      <Switch>
        <Route path="/Produits">
          <Products />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/Sign-up">
          <Signup setUser={setUser} />
        </Route>
        <Route path="/Sign-in">
          <SignIn setUser={setUser} />
        </Route>
        <Route path="/publish">
          <Publish />
        </Route>
        <Route exact path="/">
          <Acceuil />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
