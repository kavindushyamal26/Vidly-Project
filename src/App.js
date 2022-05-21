import "./App.css";
import { Route } from "react-router-dom";
import Movies from "./components/movie";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notfound";
import { Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/notfound" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/notfound" />
        </Switch>
      </div>
    </>
  );
}

export default App;
