import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Acceuil from "./pages/Acceuil";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/Produits">
          <Products />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/Sign-up">
          <Signup />
        </Route>
        <Route path="/Sign-in">
          <SignIn />
        </Route>
        <Route path="/">
          <Acceuil />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
