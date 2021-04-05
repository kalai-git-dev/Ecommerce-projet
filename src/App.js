import React, { useState, useEffect } from "react";
import axios from "axios";
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
import Offer from "./pages/Offer";
import FilterData from "./pages/FilterData";

function App() {
  const [token, setToken] = useState(Cookie.get("userToken") || null);
  const [name, setName] = useState("");
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");

  const [search, setSearch] = useState("");

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
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3000/offers`);
      setData(response.data.offers);
      setIsLoading(false);
    };

    fetchData();
  }, []);
  console.log(data);
  return (
    <Router>
      <Header token={token} setUser={setUser} name={name} />
      <Switch>
        <Route path="/Produits">
          <Products data={data} />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/Recherche">
          <FilterData />
        </Route>

        <Route path="/Sign-up">
          <Signup setUser={setUser} />
        </Route>
        <Route path="/Sign-in">
          <SignIn setUser={setUser} />
        </Route>
        <Route path="/publish">
          <Publish token={token} />
        </Route>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route exact path="/">
          <Acceuil
            data={data}
            isLoading={isLoading}
            setSearch={setSearch}
            setCategory={setCategory}
            setCity={setCity}
            category={category}
            search={search}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
